import React, { useState } from "react";
import { Navbar, Container, Form, Modal, Button } from "react-bootstrap";
import { RiAddFill } from "react-icons/ri";
import AddForm from "./AddForm";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Restaurant & Food Truck App</Navbar.Brand>
        <Form className="d-flex">
          <RiAddFill className="icon-add" onClick={() => setShow(true)} />
        </Form>
      </Container>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavbarComponent;
