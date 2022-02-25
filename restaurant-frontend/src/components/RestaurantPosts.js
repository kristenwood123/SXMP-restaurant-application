import React from "react";
import { Container } from "react-bootstrap";
// import styles from "styled-components";
// import { useGlobalContext } from "../contexts/context";
// import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

import Table from "./Table";

const RestaurantPosts = () => {
  return (
    <Container fluid="md">
      <Table />
    </Container>
  );
};

export default RestaurantPosts;
