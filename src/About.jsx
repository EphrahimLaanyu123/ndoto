import React from "react";
import "./About.css";
import image1 from "./assets/WhatsApp Image 2024-03-03 at 09.36.47 (2).jpeg";
import image2 from "./assets/Screenshot from 2024-03-05 11-46-26.png";
import image3 from "./assets/WhatsApp Image 2024-03-04 at 22.13.13.jpeg"
import image4 from "./assets/WhatsApp Image 2024-03-04 at 22.13.05.jpeg"

const Desktop = () => {
  return (
    <div className="about-content">


      <div className="ndoto-forest">
        <div className="text-container">
          <h1 className="ndoto-forest-header">Ndoto Forest</h1>
          <div className="underline"></div>
          <p className="ndoto-forest-p">
            Ndoto Forest Community Conservation Organization is a registered
            <br />community-based organization in Samburu North sub-county
            <br />with a primary focus on combating climate change through
            <br />forest conservation
          </p>
          <div className="line-divider"></div>
        </div>

        <img src={image1} alt="Ndoto Forest" />
      </div>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="ndoto-forest-location">
        <img src={image2} alt="Location" />
        <div className="text-container">
        <h1 className="location-header">Location</h1>
        <div className="underline2"></div>
        <p className="location-p">
          Samburu County, situated in the Arid and Semi-Arid regions of Kenya,
          <br />covers an area of 21,022.1 square kilometers and lies in the
          northern part of the Great <br />Rift Valley. Bordered by Turkana,
          Baringo, Marsabit, Isiolo, and Laikipia, the county's altitude
          ranges <br />from 600 to 1,450 meters above sea level, with 80% of
          the land falling within this range. Primarily used <br />as grazing
          fields by pastoralist communities and for wildlife conservation,
          <br />the county hosts diverse fauna, including giraffes, lions,
          elephants, and more.
        </p>
        </div>
      </div>
      <div className="line-divider2"></div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="ndoto-forest-land-use">
        <div className="text-container">
        <h1 className="land-use-header">Land use and land ownership</h1>
        <div className="underline3"></div>
        <p className="land-use-p">
        Land ownership in Samburu County falls into four categories: <br />Trust, communal, Government, and Private. 
        Communal land, managed by communities, and private land, <br />including group ranches, dominate the landscape.T
        he county's primary land use practices revolve around pastoralism and wildlife conservation, accounting for
         over 90% of total land holdings. Additionally, farming occurs<br /> in favorable areas such as Poro, Baragoi, 
         South Horr, and Tuum divisions, while gazetted forests <br />cover 15% of the land area, providing crucial habitat 
         and forage for both wildlife and livestock.
        </p>
        </div>
        <img src={image3} alt="Land-use" />
      </div>
      <div className="line-divider3"></div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <div className="text-container-quote">
        <p className="quote-p">
        “ The primary objective of the organization is to sustainably conserve <br />Ndoto Forest, ensuring it continues to
        provide ecological, socio-economic, <br />and cultural services. Additionally, the organization seeks to initiate, complement, <br />
        and scale up conservation programs that promote biodiversity and improve<br /> livelihoods within the forest and its surrounding communities.<br />
        An immediate objective of the organization is to engage the community, <br />Kenya Forest Service (KFS), and other relevant stakeholders in forest<br />
         management and conservation activities. <br />Collaboration is crucial for realizing the vision of a well-conserved Ndoto Forest.”
        </p>
        </div>
        <div className="line-divider3"></div> */}
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="ndoto-forest-population">
        <img src={image4} alt="Population" />
        <div className="text-container">
        <h1 className="population-header">Location</h1>
        <div className="underline4"></div>
        <p className="population-p">
          Samburu County, situated in the Arid and Semi-Arid regions of Kenya,
          <br />covers an area of 21,022.1 square kilometers and lies in the
          northern part of the Great <br />Rift Valley. Bordered by Turkana,
          Baringo, Marsabit, Isiolo, and Laikipia, the county's altitude
          ranges <br />from 600 to 1,450 meters above sea level, with 80% of
          the land falling within this range. Primarily used <br />as grazing
          fields by pastoralist communities and for wildlife conservation,
          <br />the county hosts diverse fauna, including giraffes, lions,
          elephants, and more.
        </p>
        </div>
      </div>
      <div className="line-divider2"></div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    </div>
  );
};

export default Desktop;
