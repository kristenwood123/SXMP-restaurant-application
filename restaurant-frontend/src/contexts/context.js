import React, { useContext, useState } from "react";
import restaurantPlaces from "../data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // State
  const [restaurants, setRestaurants] = useState(restaurantPlaces);
  console.log("in context", restaurants);

  return (
    <AppContext.Provider value={{ restaurants }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
