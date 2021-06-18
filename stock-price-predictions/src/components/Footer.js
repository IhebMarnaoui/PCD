import React from 'react'
import {Navbar} from 'react-bootstrap'

function footer() {
    return (
        <Navbar sticky="bottom">
        <Navbar.Brand >Stock Price Predictions</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <a>© Stock Price Predictions 2021. All Rights Reserved.</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default footer
