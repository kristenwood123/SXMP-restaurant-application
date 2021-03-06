import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import DetailsModal from "./DetailsModal";

const RestaurantCard = ({ restaurant }) => {
  const [modalShow, setModalShow] = useState(false);
  const { name, address, likes, dislikes, foodItems } = restaurant;

  return (
    <Card
      style={{
        width: "18rem",
        margin: ".5rem",
        cursor: "pointer",
      }}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card.Text
            className="pb-4"
            style={{ color: "gray", fontSize: "14px" }}
          >
            {foodItems}
          </Card.Text>
          <Card.Subtitle className="mb-2">
            <FaRegThumbsUp
              fill="red"
              fontSize="20px"
              style={{ marginRight: ".5rem" }}
            ></FaRegThumbsUp>
            {likes} likes
            <FaRegThumbsDown
              fill="red"
              fontSize="20px"
              style={{ marginLeft: "1rem", marginRight: "2px" }}
            />
            {dislikes} dislikes
          </Card.Subtitle>
          <Card.Text>{address}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "red",
                border: "none",
                display: "flex",
              }}
              size="sm"
              onClick={() => setModalShow(true)}
            >
              View More
            </Button>
          </div>
          <DetailsModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
