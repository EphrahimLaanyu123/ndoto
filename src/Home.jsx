import React from "react";
import HomeComponent from "./Home2";
import Ndoto from "./Ndoto"; // Import the Ndoto component
import Blog from "./Blog"; // Import the Blog component
import Home3 from "./Home3";

const Home = () => {
  return (
    <div className="diva">
     {/* <HomeComponent/> */}
     <Home3></Home3>
      <Blog />
      <Ndoto />
    </div>
  );
};

export default Home;

