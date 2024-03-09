import React from 'react';
import './bloger.css';
import bird from "./assets/WhatsApp Image 2024-03-04 at 22.13.04.jpeg"


const ExploreCard = ({imageSrc, title, buttonText, altText}) => (
  <div className="explore-card">
    <img loading="lazy" src={bird} alt={altText} className="card-image" />
    <div className="title">{title}</div>
    <div className="divider" />
    <button className="view-more">{buttonText}</button>
  </div>
);

const DestinationHighlight = () => (
  <>
    <header className="destination-highlight-header">
      <h1>Explore the latest from Ndoto Forest</h1>
      <ExploreCard
        imageSrc="your-image-url-here"
        title="Eco-tourism"
        buttonText="View more"
        altText="Eco-tourism landscape"
      />
    </header>
  </>
);

export default DestinationHighlight;
