# -*- coding: utf-8 -*-
"""
Created on Wed May 12 04:50:02 2021

@author: Iheb_

import numpy as np
import pandas as pd
import pandas_datareader.data as web
from pathlib import Path
from scipy.stats import spearmanr
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.preprocessing import MinMaxScaler
import datetime
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM
from tensorflow.keras.callbacks import  EarlyStopping,ModelCheckpoint
from tensorflow import keras
from keras.utils.vis_utils import plot_model
import matplotlib.pyplot as plt
import seaborn as sns
import pickle
"""

def fillingmissingdata(stock):
    stock = stock.asfreq('D')
    stock=stock.fillna(method='ffill')
    stock['OpenClose_Average']=(stock['Open']+stock['Close'])/2
    stock=stock['OpenClose_Average']
    
"""
def create_univariate_rnn_data(data, window_size):
    n = len(data)
    y = data[window_size:]
    data = data.values.reshape(-1, 1) # make 2D
    X = np.hstack(tuple([data[i:n-j, :] for i, j in enumerate(range(window_size, 0, -1))]))
    print(X.shape)
    print(y.shape)
    return pd.DataFrame(X, index=y.index), y"""