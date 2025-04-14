import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import WelcomeText from "./WelcomeText";
import Slider from "./Slider";
import Introduction from "./Introduction";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <WelcomeText />
      <Slider />
      <Introduction />
    </div>
  );
};

export default Home;