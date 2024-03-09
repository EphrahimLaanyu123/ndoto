import React from "react";
import "./Home2.css";
import Ndoto from "./Ndoto"; // Import the Ndoto component
import Blog from "./Blog"; // Import the Blog component

const HomeComponent= () => {
  return (

    <div className="custom-overlap-wrapper">
      <div className="custom-overlap-group">
        <p className="custom-vision-text">Here is ndoto</p>
        <div className="custom-overlap">
          <p className="custom-text-wrapper">Welcome to Ndoto Forest</p>
          <div className="custom-div-wrapper">Preserving Land. Empowering</div>
        </div>
      </div>
    </div>

  );
};



const Home2 = () => {
  return (
    <div>
     <HomeComponent/>
      <Blog />
      <Ndoto />
    </div>
  );
};

export default Home2;
