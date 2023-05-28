import React from "react";
import "../App.css";
import Header from "../components/Header";
import Service from "../components/Service";
import PetDisplay from "../components/PetDisplay";

const Homepage = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Service />
        <PetDisplay />
      </div>
    </div>
  );
};

export default Homepage;
