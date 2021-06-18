import React from "react";
import Robot from "../Images/Robot.png";
import Forecast from "../Images/Forecast.png";

function OurServices() {
  return (
    <div style={{paddingTop: "30px"}}>
      <center>
        <h1
          style={{
            fontWeight: "bold",
            color: "#044A67",
            marginBottom: "30px",
            fontSize: "50px",
          }}
        >
          {" "}
          Our Services{" "}
        </h1>
      </center>
      <div style={{display: "flex", paddingLeft:"10%", paddingRight:"10%"}}>
        <div style={{flex: "1"}}>
          <center >
          <img src = {Robot} />
          <h3 style={{fontSize: "20px", color: "#044A67", fontWeight: "bold", marginTop:"3%"}}> ARTIFICIAL <br /> INTELLIGENCE </h3>
          <p> Our artificial intelligence algorithm analyses <br /> millions of data points to extract patterns.</p>
          </center>
        </div>
        <div >
          <center style={{marginRight:"230px"}}>
          <img src = {Forecast} />
          <h3 style={{fontSize: "20px", color: "#044A67", fontWeight: "bold", marginTop:"3%"}}> STOCK PRICE <br /> FORECASTING </h3>
          <p > The creation of complex models allows <br /> us to accurately forecast stock prices. </p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
