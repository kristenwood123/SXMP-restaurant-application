import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import restaurantImg from "../images/restaurantimage.jpg";
import AddForm from "./AddForm";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={restaurantImg} />
        <Card.Body>
          <Card.Text>
            Welcome to my restaurant application. Come here to search your
            favorite restaurants or add ones to the list.
          </Card.Text>
          <Button variant="primary" onClick={() => setShow(true)}>
            Add a restaurant
          </Button>
        </Card.Body>
      </Card>

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
    </>
  );
};

export default Sidebar;
