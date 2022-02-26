import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
    food_type: "",
    likes: false,
  });
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/restaurants/getRestaurants?num=${currentPage}`
        // `http://localhost:8080/restaurants/getAllRestaurants`
      );
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
