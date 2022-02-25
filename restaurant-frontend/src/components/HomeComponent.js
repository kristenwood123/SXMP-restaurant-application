import React from "react";
import RestaurantPosts from "./RestaurantPosts";
import styles from "styled-components";

const HomeComponent = () => {
  return (
    <Container>
      <RestaurantPosts />
    </Container>
  );
};

export default HomeComponent;
const Container = styles.section`
width: 100%;`;
