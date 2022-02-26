import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";

const RestCard = ({ restaurant }) => {
  const { name, address, location, foodItems, locationDescription } =
    restaurant;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2">
          <FaRegHeart
            fill="red"
            fontSize="20px"
            style={{ marginRight: "1rem" }}
          ></FaRegHeart>
          1232 likes
        </Card.Subtitle>
        <Card.Text>{address}</Card.Text>
        <Button variant="danger" size="sm">
          View More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RestCard;
