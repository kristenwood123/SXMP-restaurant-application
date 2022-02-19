import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import AddForm from "./AddForm";

const RestaurantPosts = () => {
  return (
    <React.Fragment>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <Card>
              <Card.Header>
                Hot coffee: iced coffee: hot chocolate: tea: pastries
              </Card.Header>
              <Card.Body>
                <Card.Title>Philz Coffee Truck</Card.Title>
                <Card.Text>735 MONTGOMERY ST</Card.Text>
                <ButtonGroup>
                  <Button variant="primary">View</Button>
                  <Button variant="primary">Edit</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurant</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default RestaurantPosts;
