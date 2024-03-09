// Ndoto.jsx

import React from 'react';
import './Ndoto.css'; // Importing the CSS file
import forest from './assets/Screenshot from 2024-03-03 11-25-08.png'
import bird from './assets/WhatsApp Image 2024-03-04 at 22.13.04.jpeg'
const Ndoto = () => {
  return (

      <div className="div">
        <div className="overlap">
          <img className="screenshot-from" alt="Screenshot from" src={forest} />
          <img className="whatsapp-image" alt="Whatsapp image" src={bird} />
        </div>
        <div className="overlap-group">
          <div className="text-wrapper">About Ndoto Forest</div>
          <p className="our-commitment-to">
            Our Commitment to Environmental Conservation
          </p>
        </div>
        <div className="overlap-group-2">
          <p className="p">
          At Ndoto Forest, we work with the local communities to preserve the natural 
          beauty of Samburu County, Kenya. We believe that the best solutions come from 
          the people who are most affected by the problem. We have dedicated our lives to 
          working with these communities — providing whatever support they need in order to 
          unlock their potential. We want all individuals to envision their goals and realize
          they have the ability to make their dreams a reality. Learn more about our mission and 
          how you can join us in our efforts.
          </p>
          <div className="divider2" />
          <button className="text-wrapper-2">Learn more</button>
        </div>
      </div>

  );
};

export default Ndoto;

