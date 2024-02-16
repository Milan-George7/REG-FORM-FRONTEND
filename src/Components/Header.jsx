import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <Navbar style={{background:'orange'}} expand="lg" className="">
      <Container >
        <Navbar.Brand style={{color:'black'}} href="#home">REG.COM</Navbar.Brand>
        
            <Nav className="ms-auto">
            <Nav.Link style={{color:'black'}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#link">Link</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#link">About Us</Nav.Link>
            </Nav>
        
      </Container>
    </Navbar>
  )
}
