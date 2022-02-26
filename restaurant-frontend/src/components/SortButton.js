import React from "react";
import styles from "styled-components";
import { Dropdown } from "react-bootstrap";
import { useGlobalContext } from "../contexts/context";
import axios from "axios";

const SortButton = () => {
  const { currentPage, setLoading, setRestaurants } = useGlobalContext();

  const sortByNameASC = () => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/restaurants/sort?page=${currentPage}&order=true&type=name`
      );
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  };

  const sortByNameDESC = () => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/restaurants/sort?page=${currentPage}&order=false&type=name`
      );
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  };

  const sortByAddressASC = () => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/restaurants/sort?page=${currentPage}&order=true&type=address`
      );
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  };

  const sortByAddressDESC = () => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/restaurants/sort?page=${currentPage}&order=false&type=address`
      );
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  };
  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Sort by: Featured
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={sortByNameASC}>
            Name: A - Z
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={sortByNameDESC}>
            Name: Z - A
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={sortByAddressASC}>
            Address: A - Z
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={sortByAddressDESC}>
            Address: Z - A
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
