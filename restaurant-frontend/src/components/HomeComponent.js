import React from "react";
import RestaurantPosts from "./RestaurantPosts";
import Hero from "./Hero";
import styles from "styled-components";
import Pagination from "./Pagination";

const HomeComponent = () => {
  return (
    <Container>
      <Hero />
      <RestaurantPosts />
      <Pagination />
    </Container>
  );
};

export default HomeComponent;
const Container = styles.section`
width: 100%;`;
