import React from "react";
import { Carousel } from "react-bootstrap";
import taswira1 from "../Images/1.jpg"
import taswira2 from "../Images/2.jpg"
import taswira3 from "../Images/5.jpg"

function Welcome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taswira1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1>WELCOME TO <br />  <span style={{color: "#3498DB", fontWeight: "bold",  }}>Stock Price Prediction
          </span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taswira2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>WELCOME TO <br />  <span style={{color: "#3498DB", fontWeight: "bold",  }}>Stock Price Prediction
          </span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taswira3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>WELCOME TO <br />  <span style={{color: "#3498DB", fontWeight: "bold",  }}>Stock Price Prediction
          </span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Welcome;
