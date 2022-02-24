import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State
  const [restaurants, setRestaurants] = useState([]);

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/restaurant/getRestaurants?num=1")
      .then((res) => res.json())
      .then((result) => {
        setRestaurants(result);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        restaurants,
        setRestaurants,
        newRestaurant,
        setNewRestaurant,
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
