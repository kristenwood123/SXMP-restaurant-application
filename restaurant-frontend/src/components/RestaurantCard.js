import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import DetailsModal from "./DetailsModal";

const RestaurantCard = ({ restaurant }) => {
  const [modalShow, setModalShow] = useState(false);
  const { name, address } = restaurant;

  return (
    <Card style={{ width: "18rem", margin: ".5rem", cursor: "pointer" }}>
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
          <Button variant="danger" size="sm" onClick={() => setModalShow(true)}>
            View More
          </Button>
          <DetailsModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
