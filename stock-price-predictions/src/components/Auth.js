import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Home from "./Home";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Connect() {
  alert("You Must Log In First !");
}

function Auth() {
  let history = useHistory();
  const [mail, setmail] = useState("");
  const [pwd, setpwd] = useState("");
  const [flag, setflag] = useState();
  function login() {
    const data = {
      email: mail,
      pwd: pwd,
    };
    if (mail=="ihebeddine.marnaoui@ensi-uma.tn" & pwd=="iheb"){
      history.push('/home')
    }
    else {
      alert("Wrong Email/Password Combinaison")
    }
    //axios
    //  .post("http://127.0.0.1:5000/login", data)
    //  .then((response) => setflag(response.data.flag));
  
    //if (flag === 1) {
    //  history.push("/home");
    //} else {
   //   alert("Wrong Email/Password Combinaison");}
  }

  return (
    <Container>
      <Navbar>
        <Navbar.Brand variant="outline-info">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Stock Price Predictions
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Button variant="outline-info" className="mr-sm-2" onClick={Connect}>
          Home
        </Button>
        <Button variant="outline-info" className="mr-sm-2" onClick={Connect}>
          Forecasts
        </Button>
        <Link to="/signup">
          <Button
            variant="outline-info"
            className="mr-sm-2"
            style={{
              backgroundColor: "#17a2b8",
              borderColor: "#17a2b8",
              color: "#fff",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Navbar>

      <Form onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setmail(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpwd(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Auth;
