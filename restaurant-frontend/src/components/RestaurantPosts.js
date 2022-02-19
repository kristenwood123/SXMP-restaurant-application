import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const RestaurantPosts = () => {
  return (
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
              <Button variant="primary">View</Button>
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantPosts;
