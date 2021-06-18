import React from "react";

function LatestForcasts() {
  return (
    <div style={{ display: "flex", paddingLeft: "60px" , paddingRight:"30px"}}>
      <hr style={{ flex: "1", noshade:"true" , border: "5px solid #e3e4e4", margin: "30px " }} />
      <a
        style={{
          color: "#044A67",
          fontSize: "43px",
          fontWeight: "bold",
          paddingLeft: " 25px",
          paddingRight: " 20px ",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Latest Forecasts
      </a>
    </div>
  );
}

export default LatestForcasts;
