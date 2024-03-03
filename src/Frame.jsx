import React from "react";
import "./Home.css";

const Frame = ({ className }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="text-wrapper">NDOTO FOREST</div>
    </div>
  );
};

export default Frame;
