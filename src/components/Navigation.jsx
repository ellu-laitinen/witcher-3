import React from "react";

import { Container, Navbar, Link, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      /*      style={{ background: "darkgrey" }} */
      expand="lg"
    >
      <Container>
        <Navbar.Brand>WITCHER</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
