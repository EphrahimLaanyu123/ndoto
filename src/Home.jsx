// Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Frame from "./Frame";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image">
      <div className="desktop">
        <div className={`overlap-group ${isAnimated ? "animate" : ""}`}>
          <Frame className="frame-1" />
          <div className={`text-wrapper ${isAnimated ? "animate" : ""}`}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
