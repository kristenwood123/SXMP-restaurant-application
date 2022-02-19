import React from "react";
import RestaurantPosts from "./RestaurantPosts";
import Sidebar from "./Sidebar";
import styles from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <RestaurantPosts />
      <Sidebar />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styles.div`
  background: white;
  width: 100%;
  height: 100%;
  position:fixed;
  padding:0;
  margin:0;
  left:0;
  padding-top: 2rem;
`;
