import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import styles from "styled-components";
import { useGlobalContext } from "../contexts/context";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();

  return (
    <React.Fragment>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            {restaurants.map((restaurant) => {
              const { name, address, description } = restaurant;
              return (
                <div style={{ marginBottom: "2rem" }}>
                  <Card>
                    <CardHeader>
                      Food Types:{" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "normal",
                        }}
                      >
                        {description}
                      </span>
                      <hr></hr>
                    </CardHeader>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: 30,
                          fontWeight: "bold",
                          marginTop: 0,
                        }}
                      >
                        {name}
                      </Card.Title>
                      <Card.Text style={{ color: "gray" }}>{address}</Card.Text>
                      <hr></hr>
                      <ButtonGroup>
                        <Button variant="primary" className="mr-1">
                          View
                        </Button>
                        <Button variant="primary">Edit</Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

const CardHeader = styles.div`
background: white; 
margin: 1rem;
margin-bottom: -1rem;
border: none;
font-size: 14px;
font-weight: bold;
`;

export default RestaurantPosts;
