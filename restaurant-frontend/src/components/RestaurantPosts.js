import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useGlobalContext } from "../contexts/context";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();
  console.log("tyyype", typeof restaurants.restaurants);
  return (
    <React.Fragment>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            <Card>
              {restaurants.map((restaurant) => {
                const { name, address, description } = restaurant;
                return (
                  <>
                    <Card.Header>{description}</Card.Header>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{address}</Card.Text>
                      <ButtonGroup>
                        <Button variant="primary">View</Button>
                        <Button variant="primary">Edit</Button>
                      </ButtonGroup>
                    </Card.Body>
                  </>
                );
              })}
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default RestaurantPosts;
