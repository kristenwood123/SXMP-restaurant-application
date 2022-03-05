import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import DetailsModal from "./DetailsModal";

const RestaurantCard = ({ restaurant }) => {
  const [modalShow, setModalShow] = useState(false);
  const { name, address, likes, dislikes } = restaurant;

  return (
    <Card style={{ width: "18rem", margin: ".5rem", cursor: "pointer" }}>
      <Card.Body>
        <Card.Title style={{ paddingBottom: "1rem" }}>{name}</Card.Title>
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
            position: "relative",
          }}
        >
          <Button
            style={{ backgroundColor: "red", border: "none" }}
            size="sm"
            onClick={() => setModalShow(true)}
          >
            View More
          </Button>
          <DetailsModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
