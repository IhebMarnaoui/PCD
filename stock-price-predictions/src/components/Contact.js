import React, { useState } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "../Images/map.png";

const Contact = () => {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About Stock Price Prediction</span> Ut congue augue non tellus
          bibendum, in varius tellus condimentum. In scelerisque nibh tortor,
          sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices
          eleifend. Integer tellus est, vehicula eu lectus tincidunt, ultricies
          feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut,
          aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra
          massa.
        </p>
      </div>
      <div class="footer-center col-md-4 col-sm-6"></div>
      <div class="footer-right col-md-4 col-sm-6">
        <div>
          <p style={{color: "#fff"}}>
            <span style={{color: "#fff"}}> Campus Universitaire de la Manouba، Manouba 2010</span> <br />La
            Manouba, Tunis
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p style={{color: "#fff"}}> (+216) 53 589 882</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> stockpriceprediction@company.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
