# -*- coding: utf-8 -*-
"""
Created on Mon May 10 10:37:01 2021

@author: Iheb_
"""
from flask import Flask, jsonify
import numpy as np
import tensorflow as tf
import pandas_datareader.data as web
from datetime import date
import datetime
import pickle

app = Flask(__name__)

def getData(start, end):
  IT_Companies=[]
  IT_Companies.append(web.DataReader('AAPL', 'yahoo', start=start, end=end))  
  IT_Companies.append(web.DataReader('FB', 'yahoo', start=start, end=end))
  IT_Companies.append(web.DataReader('MSFT', 'yahoo', start=start, end=end))
  IT_Companies.append(web.DataReader('HPQ', 'yahoo', start=start, end=end)) 
  IT_Companies.append(web.DataReader('CSCO', 'yahoo', start=start, end=end)) 
  IT_Companies.append(web.DataReader('ADM', 'yahoo', start=start, end=end))
  IT_Companies.append(web.DataReader('IBM', 'yahoo', start=start, end=end))
  IT_Companies.append(web.DataReader('QCOM', 'yahoo', start=start, end=end))
  for i in range(len(IT_Companies)):
    IT_Companies[i]['OpenClose_Average']=(IT_Companies[i]['Open']+IT_Companies[i]['Close'])/2
    IT_Companies[i] = IT_Companies[i]['OpenClose_Average']
  return IT_Companies

today = date.today()
days = datetime.timedelta(200)
start=today-days
end=today

IT_Companies=getData(start, end)
date=[]
L=IT_Companies[6].keys()
for i in L: 
  date.append(i.strftime("%m/%d/%Y"))
  date.append(i.strftime("%m/%d/%Y"))
for i in range (7):
    M = today + datetime.timedelta(i)
    date.append(M.strftime("%m/%d/%Y"))

IT_Companies_names=["AAPL","FB","MSFT","HPQ","CSCO","ADM","IBM","QCOM"]

path_models_files = "h file univ_onestep/"
path_scalers_files = "Scalers_onestep/"

modelsARIMA=[k for k in range(len(IT_Companies))]
new_value_t =  [[] for k in range(len(IT_Companies))]
models=[k for k in range(len(IT_Companies))]
scalers= [k for k in range(len(IT_Companies))]
for i in range (len(IT_Companies)):  
    models[i]=tf.keras.models.load_model(path_models_files+IT_Companies_names[i]+"univariate_one_step_1.h5")    
for i in range (len(IT_Companies)):
    scalers[i]=pickle.load(open(path_scalers_files+"scaler"+IT_Companies_names[i]+".h5", 'rb'))
    
@app.route('/company/<company>',methods=['GET'])
def graphe(company):
    d=dict() 
    IT_Companies_scaled=[k for k in range(len(IT_Companies))]
    for i in range (len(IT_Companies)):        
        IT_Companies_scaled[i]= scalers[i].transform(IT_Companies[i][-64:-1].values.reshape(63,1))
        IT_Companies_scaled[i]=np.expand_dims(IT_Companies_scaled[i], 1).reshape(1,63,1)
    last_output_arr={"AAPL":list(IT_Companies[0]),"FB":list(IT_Companies[1]),"MSFT":list(IT_Companies[2]),"HPQ":list(IT_Companies[3]),"CSCO":list(IT_Companies[4]),"ADM":list(IT_Companies[5]),"IBM":list(IT_Companies[6]),"QCOM":list(IT_Companies[7])}
    if company == "IBM":
        future_days=7
        for i in range (len(IT_Companies)):
          j=0
          B=IT_Companies_scaled[i]
          while j<future_days:
            B=B.reshape(1,63,1)
            yhat = models[i].predict(B,verbose=0)
            last_output_arr[IT_Companies_names[i]].append(scalers[i].inverse_transform(yhat).item(0))
            B=B.reshape(63,1)
            B=np.append(B[1:],yhat)
            j=j+1
        
    if company == "HPQ":
        model=tf.keras.models.load_model("Modele1_Multi/"+"HPQ"+"univariate_multi_step_1.h5")  
        scaler=pickle.load(open("Modele1_Multi/"+"scalerHPQ.pkl", 'rb'))
        new_value = {"HPQ":0}
        i=3
        IT_Companies_scaled[i]= scaler.transform(IT_Companies[i][-64:-1].values.reshape(63,1))
        IT_Companies_scaled[i]=np.expand_dims(IT_Companies_scaled[i], 1).reshape(1,63,1)
        new_value_t[i]=model.predict(IT_Companies_scaled[i])
        new_value[IT_Companies_names[i]]= list(scaler.inverse_transform(new_value_t[i]).reshape(7,))
        for w in list(new_value["HPQ"]):
            last_output_arr["HPQ"].append(float(w))
            
    if company =="MSFT" or company =="CSCO" or company =="ADM" or company == "QCOM":
        model=tf.keras.models.load_model("Modele2_Multi/"+company+"univariate_multi_step_2.h5")  
        scaler=pickle.load(open("Modele2_Multi/"+"scaler"+company+".h5", 'rb'))
        new_value =  {"MSFT":0,"CSCO":0,"ADM":0,"QCOM":0} 
        for i in range (len(IT_Companies)):     
            IT_Companies_scaled[i]= scaler.transform(IT_Companies[i][-64:-1].values.reshape(63,1))
            IT_Companies_scaled[i]=np.expand_dims(IT_Companies_scaled[i], 1).reshape(1,63,1)
            new_value_t[i]=model.predict(IT_Companies_scaled[i])
            new_value[IT_Companies_names[i]]= list(scaler.inverse_transform(new_value_t[i]).reshape(7,))
        for w in list(new_value[company]):
            last_output_arr[company].append(float(w))
            
    if company=="AAPL" or company == "FB":
        model=tf.keras.models.load_model("Modele4_Multi/"+company+"univariate_multi_step_4.h5")  
        scaler=pickle.load(open("Modele4_Multi/"+"scaler"+company+".h5", 'rb'))
        new_value =  {"AAPL":0,"FB":0}
        for i in range (len(IT_Companies)):     
            IT_Companies_scaled[i]= scaler.transform(IT_Companies[i][-64:-1].values.reshape(63,1))
            IT_Companies_scaled[i]=np.expand_dims(IT_Companies_scaled[i], 1).reshape(1,63,1)
            new_value_t[i]=model.predict(IT_Companies_scaled[i])
            new_value[IT_Companies_names[i]]= list(scaler.inverse_transform(new_value_t[i]).reshape(7,))
        for w in list(new_value[company]):
            last_output_arr[company].append(float(w))
        
    d["Val"]=last_output_arr[company]
    d["Date"]=date
    return (jsonify(d))

@app.route('/predict',methods=['GET'])
def predict():
    new_value_t =  [k for k in range(len(IT_Companies))]
    new_value =  [k for k in range(len(IT_Companies))]
    IT_Companies_scaled=  [k for k in range(len(IT_Companies))]
    
    new_value = {"AAPL":0,"FB":0,"MSFT":0,"HPQ":0,"CSCO":0,"ADM":0,"IBM":0,"QCOM":0}
    
    for i in range (len(IT_Companies)):        
        IT_Companies_scaled[i]= scalers[i].transform(IT_Companies[i][-64:-1].values.reshape(63,1))
        IT_Companies_scaled[i]=np.expand_dims(IT_Companies_scaled[i], 1).reshape(1,63,1)
        new_value_t[i]=models[i].predict(IT_Companies_scaled[i])
        new_value[IT_Companies_names[i]]= scalers[i].inverse_transform(new_value_t[i]).item(0)
    return (jsonify(new_value))

@app.route('/ActualValue',methods=['GET'])
def ActualValue():
    IT_Companies=[]
    IT_Companies=getData(start, end)
    L=[]
    for i in range(len(IT_Companies)):
      L.append(IT_Companies[i].tail(1).values[0])
      AV=jsonify(L)
    return AV
    

if __name__ == '__main__':
    app.run()
    