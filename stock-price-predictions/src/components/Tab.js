import React, { useState , useEffect} from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import axios from "axios";

function Tab(){

const [Actual, getActual] = useState([]);
const [prediction, getPrediction] = useState({})

useEffect(() => {
  axios.get("http://127.0.0.1:5000/ActualValue").then(res => getActual(res.data))
  axios.get("http://127.0.0.1:5000/predict").then(res=> getPrediction(res.data))
}, []);

const Companies = [

  {
    "symbol": "AAPL",
    "name": 'Apple Inc',
    "Actual Value":Actual[0],
    "prediction":prediction.AAPL
  },
  {
    "symbol": "FB",
    "name": 'Facebook Inc',
    "Actual Value":Actual[1],
    "prediction":prediction.FB
  },
  {
    "symbol": "MSFT",
    "name": "'Microsoft Corporation'",
    "Actual Value":Actual[2],
    "prediction":prediction.MSFT
  },
  {
    "symbol": "HPQ",
    "name": 'HP Inc',
    "Actual Value":Actual[3],
    "prediction":prediction.HPQ
  },
  {
    "symbol": "CSCO",
    "name": 'Cisco Systems Inc',
    "Actual Value":Actual[4],
    "prediction":prediction.CSCO
  },
  {
    "symbol": "ADM",
    "name": 'Advanced Micro Devices Inc',
    "Actual Value":Actual[5],
    "prediction":prediction.ADM
  },
  {
    "symbol": "IBM",
    "name": 'IBM Common',
    "Actual Value":Actual[6],
    "prediction":prediction.IBM
  },
  {
    "symbol": "QCOM",
    "name": 'QUALCOMM Inc',
    "Actual Value":Actual[7],
    "prediction":prediction.QCOM
  },

];


  return (
    <Grid data={Companies} style={{ height: 700 }}>
      <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
      <GridColumn title="Name" field="name" />
      <GridColumn title="Actual Value" field="Actual Value" />
      <GridColumn title="Prediction" field="prediction" /*cell={ChangeCell}*/ />
    </Grid>
  );
}

export default Tab;
