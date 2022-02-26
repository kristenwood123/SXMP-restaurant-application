import React from "react";
import styles from "styled-components";

const SortButton = () => {
  return (
    <Container>
      <div className="dropdown">
        <button>Sort by: Featured</button>
        <div className="dropdown-content">
          <a href="#">Name: A - Z</a>
          <a href="#">Name: Z - A</a>
          <a href="#">Address: A - Z</a>
          <a href="#">Address: Z - A</a>
        </div>
      </div>
    </Container>
  );
};

export default SortButton;

const Container = styles.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }
  button {
    background-color: red;
    color: white;
    padding: 14px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
  }


`;
