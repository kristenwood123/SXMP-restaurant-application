import React, { useContext, useState } from "react";
// import restaurantPlaces from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  fetch("http://localhost:8080/restaurant/getAllRestaurants")
    .then((res) => res.json())
    .then((result) => {
      setRestaurants(result);
    }, []);

  // State
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
  });

  return (
    <AppContext.Provider
      value={{ restaurants, setRestaurants, newRestaurant, setNewRestaurant }}
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
