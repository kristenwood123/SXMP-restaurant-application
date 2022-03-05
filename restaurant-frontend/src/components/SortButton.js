import React, { useState } from "react";
import styles from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGlobalContext } from "../contexts/context";
import axios from "axios";

const SortButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Sort by: Featured");
  const options = [
    "Name: A - Z",
    "Name: Z - A",
    "Address: A - Z",
    "Address: Z - A",
  ];

  const {
    currentPage,
    setLoading,
    setRestaurants,
    setSorted,
    setType,
    setCurrentPage,
    setOrder,
  } = useGlobalContext();

  /******************************** */

  const resetRestaurants = () => {
    setSorted(false);
    setCurrentPage(1);
    setLoading(false);
  };

  const sortBy = (option) => {
    setSelected(option);
    setIsActive(false);

    if (option === "Name: A - Z") {
      const fetchPosts = async () => {
        setLoading(true);
        setSorted(true);
        setType("name");
        setOrder(true);
        setCurrentPage(1);
        const result = await axios.get(
          `http://localhost:8080/restaurants/sort?page=${currentPage}&order=true&type=name`
        );
        setRestaurants(result.data);
        setLoading(false);
      };
      fetchPosts();
    } else if (option === "Name: Z - A") {
      const fetchPosts = async () => {
        setLoading(true);
        setSorted(true);
        setType("name");
        setOrder(false);
        setCurrentPage(1);
        const result = await axios.get(
          `http://localhost:8080/restaurants/sort?page=${currentPage}&order=false&type=name`
        );

        setRestaurants(result.data);
        setLoading(false);
      };
      fetchPosts();
    } else if (option === "Address: A - Z") {
      const fetchPosts = async () => {
        setLoading(true);
        setSorted(true);
        setType("address");
        setOrder(true);
        setCurrentPage(1);
        const result = await axios.get(
          `http://localhost:8080/restaurants/sort?page=${currentPage}&order=true&type=address`
        );
        setRestaurants(result.data);
        setLoading(false);
      };
      fetchPosts();
    } else if (option === "Address: Z - A") {
      const fetchPosts = async () => {
        setLoading(true);
        setSorted(true);
        setType("address");
        setOrder(false);
        setCurrentPage(1);
        const result = await axios.get(
          `http://localhost:8080/restaurants/sort?page=${currentPage}&order=false&type=address`
        );
        setRestaurants(result.data);
        setLoading(false);
      };
      fetchPosts();
    }
  };

  return (
    <Container>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <IoMdArrowDropdown className="drop-icon" />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div className="item" onClick={(e) => sortBy(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SortButton;

const Container = styles.div`
  display: flex;
  margin-top: 20px;
    .dropdown {
      position: relative;
      display: inline-block;
      width: 180px;
      margin: 0 auto;

    .dropdown-btn {
      padding: 10px;
      background: red;
      color: white;
      cursor: pointer;
      box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
      .dropdown-content {
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 10px;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
        z-index: 1;

        .item {
          cursor: pointer;
          padding: 10px;
          transition: all 0.2s 
        }

        .item: hover {
          background: #fcfcfc;
        }
      }
    }

    .drop-icon {
      margin-left: 5px;
      font-size: 20px;
    }
`;
