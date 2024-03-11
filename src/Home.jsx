import React from "react";
import HomeComponent from "./Home2";
import Ndoto from "./Ndoto"; // Import the Ndoto component
import Blog from "./Blog"; // Import the Blog component

const Home = () => {
  return (
    <div className="diva">
     <HomeComponent/>
      <Blog />
      <Ndoto />
    </div>
  );
};

export default Home;

