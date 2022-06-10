import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" collapseOnSelect>
        <Container>
          <Navbar.Brand>Are You Biased</Navbar.Brand>
          <Nav>
            <Navbar.Text>Try it out!</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
