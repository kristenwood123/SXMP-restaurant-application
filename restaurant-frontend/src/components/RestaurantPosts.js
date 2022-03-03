import React from "react";
import { useGlobalContext } from "../contexts/context";
import RestaurantCard from "./RestaurantCard";
import styles from "styled-components";

const RestaurantPosts = () => {
  const { restaurants } = useGlobalContext();

  return (
    <Container>
      {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
      })}
    </Container>
  );
};

export default RestaurantPosts;

const Container = styles.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem;
`;
