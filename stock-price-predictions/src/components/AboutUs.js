import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { coffee } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <div>
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
        <FontAwesomeIcon icon="coffee" size="lg" />
      </center>
      <p>
        <span> About Stock Price Prediction</span> Ut congue augue non tellus
        bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed
        rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend.
        Integer tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
        Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
        Nam ut nibh mollis, tristique ante sed, viverra massa.
      </p>
    </div>
  );
}

export default AboutUs;
