import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGlobalContext } from "../contexts/context";

const SearchForm = () => {
  const { setRestaurants, setLoading } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [selected, setSelected] = useState("");
  const options = ["address", "cuisine"];

  const sortBy = (option) => {
    const fetchPosts = async () => {
      setLoading(true);
      let result = await axios.get(
        `http://localhost:8080/restaurants/query?query=${searchTerm}&type=address`
      );
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  };

  return (
    <Container>
      <div className="field">
        <input
          value={searchTerm}
          placeholder="Address or Cuisine"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-btn" onClick={(e) => setIsActive(!isActive)}>
          Search
          <IoMdArrowDropdown className="drop-icon" />
        </div>
        {isActive && (
          <div className="search-content">
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

const Container = styles.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  width: 100%;

    .field {
      position: relative;
      display: inline-block;
      margin: 0 auto;
      display: flex;

      input { 
        width: 250px;
      }

      .search-content {
        position: absolute;
        top: 100%;
        right: 0;
        width: 120px;
        box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
        z-index: 1;

        .item {
          cursor: pointer;
          padding: 5px;
          color: white;
          background: red;
          transition: all 0.2s 
        }

        .item: hover {
          background: #dd4200;
        }
      }

    .search-btn {
      padding: 10px;
      cursor: pointer;
      background-color: red;
      box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      height: 50px;
      border-radius: 0px 6px 6px 0;
      width: 120px;
    }

    .drop-icon {
      margin-left: 5px;
      font-size: 20px;
    }
`;

export default SearchForm;
