import React from "react";
import { Navbar, Container, Form } from "react-bootstrap";
import { RiAddFill } from "react-icons/ri";
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Restaurant & Food Truck App</Navbar.Brand>
        <Form className="d-flex">
          <RiAddFill className="icon-add" />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
