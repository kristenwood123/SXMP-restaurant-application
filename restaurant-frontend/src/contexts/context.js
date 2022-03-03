import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorted, setSorted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
    food_type: "",
    likes: false,
  });
  const [order, setOrder] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let result;
      if (sorted) {
        result = await axios.get(
          `http://localhost:8080/restaurants/sort?page=${currentPage}&order=${order}&type=${type}`
        );
      } else {
        result = await axios.get(
          `http://localhost:8080/restaurants/getRestaurants?num=${currentPage}`
        );
      }
      setRestaurants(result.data);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

  return (
    <AppContext.Provider
      value={{
        restaurants,
        setRestaurants,
        newRestaurant,
        setNewRestaurant,
        currentPage,
        setLoading,
        setCurrentPage,
        setSorted,
        setType,
        setOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
