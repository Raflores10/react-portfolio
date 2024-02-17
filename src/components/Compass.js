import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

const Compass = () => {
    return (
      <Navbar>
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

  export default Compass;