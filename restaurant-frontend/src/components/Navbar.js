import React from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Restaurant & Food Truck App</Navbar.Brand>
        <Form className="d-flex">
          {/* <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          >
            
          </FormControl> */}
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
