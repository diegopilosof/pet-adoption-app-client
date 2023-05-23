import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Service from "../components/Service";
import PetDisplay from "../components/PetDisplay";
import Footer from "../components/Footer";

//todo: make navbar and homepage responsive with chakra

const Homepage = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <Service />
        <PetDisplay limit={4} />
      </div>
    </div>
  );
};

export default Homepage;
