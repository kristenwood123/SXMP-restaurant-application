import React from "react";
import HomeComponent from "./components/HomeComponent";
import NavbarComponent from "./components/Navbar";
import { useGlobalContext } from "./contexts/context";

function App() {
  const { setRestaurants } = useGlobalContext();
  fetch("http://localhost:8080/restaurant/getAllRestaurants")
    .then((res) => res.json())
    .then((result) => {
      setRestaurants(result);
    });

  return (
    <React.Fragment>
      <NavbarComponent />
      <HomeComponent />
    </React.Fragment>
  );
}

export default App;
