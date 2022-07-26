import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

function NavbarHeader() {
    return (
        <>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Shopping Mart</Navbar.Brand>
          <Nav className="me-auto" >
            <Link style = {{margin : "10px", color :"white"}} to = "/">Home</Link>
            <Link style = {{margin : "10px", color : "white"}} to = "/cartDetails">CartDetails</Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavbarHeader