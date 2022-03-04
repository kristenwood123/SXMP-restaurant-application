import React from "react";
import restaurantImg from "../images/restaurantimage.jpg";
import styles from "styled-components";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <Container>
      <img src={restaurantImg} alt="" />
      <div className="hero-search">
        <h1>Find your favorite foods</h1>
        <SearchForm />
      </div>
    </Container>
  );
};

export default Hero;

const Container = styles.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
position: relative;

.hero-search {
  position: absolute;
  color: white;
  top: 50%;
  text-align: center;

  input {
    width: 70%;
    height: 50px;
    border-radius: 6px;
    border: none;
  }

}
img {
  width: 100%;
  max-height: 500px;
  z-index: -1;
  object-fit: cover; 
}
`;
