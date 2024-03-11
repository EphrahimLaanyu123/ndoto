import React from "react";
import { Link } from "react-router-dom";
import "./Home2.css";

const HomeComponent = () => {
  return (
    <div className="home-main">
    <div className="container-home">
      <div className="texts-container">
      <h1 className="header-home">Welcome to <br/>Ndoto Forest Community Conservation Organization <br/>(NFCCO)</h1>
      <p>Preserving Land, Empowering Communities</p>
      <p>The vision of Ndoto Forest Community Conservation Organization is to maintain 
        a well-conserved forest ecosystem, sustainably providing ecological, socio-economic, 
        and cultural benefits to the community. Through collaboration with stakeholders, i
        ncluding the Kenya Forest Service, the organization aims to combat climate change
        , increase forest cover, preserve wildlife habitat, and improve the livelihoods of 
        pastoralist communities in Samburu County's semi-arid region.
      </p>
      <Link to="/about"><button>View more</button></Link>
      </div>
    </div>
    </div>
  );
};

export default HomeComponent;
