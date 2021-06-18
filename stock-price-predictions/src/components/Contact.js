import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About Stock Price Prediction</span> Stock Price Predictions is
          a company specialized in predictive algorithms. We use our expertise
          to forecast stock prices. Any opinions, news, research, analyses,
          prices, or other information offered by Stock Price Predictions is
          provided as general market commentary, and does not constitute
          investment advice. We will not accept liability for any loss or
          damage, including without limitation to, any loss of profit, which may
          arise directly or indirectly from use of or reliance on such
          information.
        </p>
      </div>
      <div class="footer-center col-md-4 col-sm-6"></div>
      <div class="footer-right col-md-4 col-sm-6">
        <div>
          <p style={{ color: "#fff" }}>
            <span style={{ color: "#fff" }}>
              {" "}
              Campus Universitaire de la Manouba، Manouba 2010
            </span>{" "}
            <br />
            La Manouba, Tunis
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p style={{ color: "#fff" }}> (+216) 53 589 882</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a style={{color:"#1167b1"}}> stockpriceprediction@company.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
