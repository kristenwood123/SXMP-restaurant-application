import React from "react";
import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";
import styles from "styled-components";
import { useGlobalContext } from "../contexts/context";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();

  return (
    <React.Fragment>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col>
            {restaurants.map((restaurant) => {
              const { name, address, description, likes } = restaurant;
              return (
                <section style={{ marginBottom: "2rem" }}>
                  <Card>
                    <LikeContainer>
                      <FiThumbsUp />
                      {likes}
                      <FiThumbsDown />
                    </LikeContainer>
                    <CardWrapper>
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
                        <Card.Text style={{ color: "gray" }}>
                          {address}
                        </Card.Text>
                        <hr></hr>
                        <Stack direction="horizontal" gap={3}>
                          <Button variant="outline-primary">Edit</Button>
                          <Button variant="primary" className="btn-block">
                            View
                          </Button>
                        </Stack>
                      </Card.Body>
                    </CardWrapper>
                  </Card>
                </section>
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

const LikeContainer = styles.div`
position: absolute;
display: flex;
flex-direction: column;
margin: 1rem;
margin-right: 2rem;
top: 45px;
font-size: 30px;
`;

const CardWrapper = styles.div`
margin-left: 5rem;
`;

export default RestaurantPosts;
