import React, { useContext, useState } from "react";
import restaurantPlaces from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State
  const [restaurants, setRestaurants] = useState(restaurantPlaces);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    description: "",
    address: "",
  });

  // Handlers

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
