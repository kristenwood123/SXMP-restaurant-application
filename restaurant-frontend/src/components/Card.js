import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";

const RestCard = ({ restaurant }) => {
  const { name, address, location, foodItems, locationDescription } =
    restaurant;

  return (
    <Card style={{ width: "18rem", margin: ".5rem" }}>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="danger" size="sm">
            View More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestCard;
