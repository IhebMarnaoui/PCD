import React from 'react'
import {Navbar, Button, Nav, DropdownButton, Dropdown, ButtonGroup, Container} from 'react-bootstrap'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <Container >
        <Navbar >
        <Navbar.Brand variant="outline-info" href="#home">
        <Link to="/" >
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> </Link>
          Stock Price Predictions
        </Navbar.Brand>
        <Nav className="mr-auto" ></Nav>
        <Link to="/" >
        <Button variant="outline-info" className="mr-sm-2">Home</Button>
        </Link>
        <Link to="/forecasts" >
        <Button variant="outline-info" className="mr-sm-2">Forecasts</Button>
        </Link>
        <Button variant="outline-info" className="mr-sm-2">About</Button>

          {[ 'Info'].map(
        (variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Log in</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sign up</Dropdown.Item>

        </DropdownButton>
      ),
         )}
        
      </Navbar>
      </Container>
    )
}

export default Header
