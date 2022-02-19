import React from "react";
import RestaurantPosts from "./RestaurantPosts";
import Sidebar from "./Sidebar";
import styles from "styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <RestaurantPosts />
        <Sidebar />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styles.div`
  background: white;
  display: flex;
  width: 100%;
  height: 100%;
  position:fixed;
  margin:0;
  left:0;
  padding: 2rem 2rem 5rem 2rem;
`;
