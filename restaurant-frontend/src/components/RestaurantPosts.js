import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../contexts/context";
import RestCard from "./Card";
// import { Row, Col } from "react-bootstrap";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();

  return (
    <Container>
      {restaurants.map((restaurant) => {
        return <RestCard key={restaurant.id} restaurant={restaurant} />;
      })}
    </Container>
  );
};

export default RestaurantPosts;
