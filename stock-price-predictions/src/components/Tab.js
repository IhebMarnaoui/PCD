import React, { useState, useEffect } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Header from "./Header";
import Contact from "./Contact";

function Tab() {
     const [Actual, getActual] = useState([]);
     const [prediction, getPrediction] = useState({});

     useEffect(() => {
          axios.get("http://127.0.0.1:5000/ActualValue").then((res) =>
               getActual(res.data)
          );
          axios.get("http://127.0.0.1:5000/predict").then((res) =>{
               getPrediction(res.data)
          } );
     }, []);
     const useStyles = makeStyles({
          table: {
               minWidth: 650,
          },
     });

     const classes = useStyles();

     const Companies = [
          {
               symbol: "AAPL",
               name: "Apple Inc",
               actualValue: Actual[0],
               prediction: prediction["AAPL"],
          },
          {
               symbol: "FB",
               name: "Facebook Inc",
               actualValue: Actual[1],
               prediction: prediction["FB"],
          },
          {
               symbol: "MSFT",
               name: "'Microsoft Corporation'",
               actualValue: Actual[2],
               prediction: prediction["MSFT"],
          },
          {
               symbol: "HPQ",
               name: "HP Inc",
               actualValue: Actual[3],
               prediction: prediction["HPQ"],
          },
          {
               symbol: "CSCO",
               name: "Cisco Systems Inc",
               actualValue: Actual[4],
               prediction: prediction["CSCO"],
          },
          {
               symbol: "ADM",
               name: "Advanced Micro Devices Inc",
               actualValue: Actual[5],
               prediction: prediction["ADM"],
          },
          {
               symbol: "IBM",
               name: "IBM Common",
               actualValue: Actual[6],
               prediction: prediction["IBM"],
          },
          {
               symbol: "QCOM",
               name: "QUALCOMM Inc",
               actualValue: Actual[7],
               prediction: prediction["QCOM"],
          },
     ];



     return (
          <>
          <Header />
          <TableContainer component={Paper}>
               <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                              <TableCell>Symbols</TableCell>
                              <TableCell>Names</TableCell>
                              <TableCell>Actual Values</TableCell>
                              <TableCell>Predictions</TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {Companies.map((row) => (
                              <TableRow key={row.symbol}>
                                   <TableCell align="letf">
                                        <Link to={"charts/" + row.symbol}>
                                             {row.symbol}
                                        </Link>
                                   </TableCell>
                                   <TableCell align="left">
                                        {row.name}
                                   </TableCell>
                                   <TableCell align="left">
                                        {row.actualValue}
                                   </TableCell>
                                   <TableCell align="left">
                                        {row.prediction}
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
          <Contact />
          </>
     );
}

export default Tab;
