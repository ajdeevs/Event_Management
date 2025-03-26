import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="pink" variant="light" expand="lg" style={{ backgroundColor: "#E91E63" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#fff" }}>
          EventZen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/events" style={{ color: "#fff" }}>
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/venues" style={{ color: "#fff" }}>
              Venues
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "#fff" }}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: "#fff" }}>
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
