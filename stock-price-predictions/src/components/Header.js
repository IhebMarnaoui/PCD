import React from 'react'
import {Navbar, Button, Nav, DropdownButton, Dropdown, ButtonGroup, Container} from 'react-bootstrap'
import logo from '../Images/logo.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <Container >
        <Navbar >
        <Navbar.Brand variant="outline-info" >
        <Link to="/Home" >
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
        <Link to="/Home" >
        <Button variant="outline-info" className="mr-sm-2">Home</Button>
        </Link>
        <Link to="/forecasts" >
        <Button variant="outline-info" className="mr-sm-2">Forecasts</Button>
        </Link>

          {[ 'Info'].map(
        (variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1" disabled>Logged in</Dropdown.Item>
          <Dropdown.Item tag={Link} href="/" eventKey="2" >Log out</Dropdown.Item>
        

        </DropdownButton>
      ),
         )}
        
      </Navbar>
      </Container>
    )
}

export default Header
