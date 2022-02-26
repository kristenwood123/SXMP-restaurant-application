import React from "react";
import RestaurantPosts from "./RestaurantPosts";
import Hero from "./Hero";
import styles from "styled-components";
import Pagination from "./Pagination";
import SortButton from "./SortButton";
import AddForm from "./AddForm";

const HomeComponent = () => {
  return (
    <Container>
      <Hero />
      {/* <AddForm /> */}
      <SortButton />
      <RestaurantPosts />
      <Pagination />
    </Container>
  );
};

export default HomeComponent;
const Container = styles.section`
width: 100%;`;
