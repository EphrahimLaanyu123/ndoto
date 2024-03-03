import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Import the CSS file

const AboutUs = () => {
  // Sample categories data
  const categories = [
    {
      image: "url1",
      description: "Content 1",
      link: "/link1",
    },
    {
      image: "url2",
      description: "Content 2",
      link: "/link2",
    },
    {
        image: "url3",
        description: "Content 3",
        link: "/link3",
      },
    // Add more categories as needed
  ];

  return (
    <div className="about-us">
      {categories.map((category, index) => (
        <div key={index} className="overlap-group">
          <img
            className="whatsapp-image"
            alt="Whatsapp image"
            src={category.image}
          />
          <div className="rectangle" />
          <div className="text">{category.description}</div>
          <Link to={category.link}>Go to {category.description}</Link>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
