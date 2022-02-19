import React from "react";
import Home from "./components/Home";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Home />
    </React.Fragment>
  );
}

export default App;
