// import React from "react";
// import { useNavigate } from "react-router-dom";
// import background from "./assets/WhatsApp Image 2024-03-03 at 09.36.47 (2).jpeg";

// const blogs = [
//   {
//     title: "The Beauty of Ndoto Forest: A Photographer's Journey",
//     description: "Explore the breathtaking landscapes and diverse wildlife of Ndoto Forest through the lens of a photographer's journey.",
//     image: background // Use appropriate image for this blog
//   },
//   {
//     title: "Sustainable Practices in Ndoto Forest",
//     description: "Learn about the ongoing efforts to conserve Ndoto Forest and how sustainable practices are ensuring its future.",
//     image: background // Use appropriate image for this blog
//   },
//   // Add more blog objects as needed
// ];

// const Blog = () => {
//   const navigate = useNavigate();

//   const handleBlogClick = (title) => {
//     navigate(`/blog/${title}`);
//   };

//   return (
//     <div className="custom-desktop">
//       {blogs.map((blog, index) => (
//         <div key={index} className="custom-blog" onClick={() => handleBlogClick(blog.title)}>
//           <img
//             className="custom-whatsapp-image"
//             alt="Whatsapp image"
//             src={background} // Use blog-specific image
//             onClick={() => handleBlogClick(blog.title)}
//           />
//           <div className="custom-text-wrapper-2" onClick={() => handleBlogClick(blog.title)}>
//             {blog.title}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;

import React from "react";
import { useNavigate } from "react-router-dom";
import background from "./assets/WhatsApp Image 2024-03-03 at 09.36.47 (2).jpeg";
import bird from "./assets/WhatsApp Image 2024-03-04 at 22.13.04.jpeg"
import plants from "./assets/nsplsh_1d7895d32e7445fab6741177395e8142~mv2.webp"
import carrywater from "./assets/bc439c_13ddb18bc3c44988b8cc6d25faf653b1~mv2.webp"
import whiteflower from "./assets/nsplsh_71510e0b9a8f458083caf114428f90a9~mv2.webp"
import waterplants from "./assets/bc439c_14e4fdb5d714455183be00bff72ddda1~mv2.webp"

import "./Blog.css";


const blogs = [
  {
    title: "Ecological Improvement",
    description: "Explore the breathtaking landscapes and diverse wildlife of Ndoto Forest through the lens of a photographer's journey.",
    image: plants
  },
  {
    title: "Eco-tourism",
    description: "Samburu County boasts of having the largest number of wildlife outside the game reserve. Some of the wild animals found in the County include; giraffes, the endangered gravy zebra, lions, elephants, and buffalos in addition to other small wildlife, The Ndoto mountain is a natural habitat to most wildlife and hence attracting both foreign and local tourist. This will be done through establishment of campsites, forest walks/ nature trails, and birdwatching. The Ndoto Mountain is surrounded by beautiful sceneries ideal for tourism. Establishment of the Community forest conservation organization will greatly improve the livelihood standards of the community members and greatly help in conservation of the forest through re-afforestation and bee keeping activities which will help conserve indigenous trees in the forest and planting of more indigenous trees to increase forest cover and increase the bee keeping activities die to availability of many trees. The aloe farming and later processing will 7 create employment opportunities in the regions as there will be a processing plant to process the aloe soap, aloe lotion and it’s by products.",
    image: bird
  },
  {
    title: "Tree planting and tree nursery development",
    description: "The Management of the Community forest conservation organization will form user groups to develop tree nurseries where they will propagate the trees until they become the right size of seedlings to be transplanted in the forest. The user groups will sell the tree seedlings to the organization and plant them in the forest. Each user group will take care of the trees seedlings they plant until they become big trees which will increase forest cover and in turn mitigate climate change. The organization seeks to sorce and plant atleast 200,000 tree seedlings both indigenous and exotic which will include The Neem tree azadirachta indica popularly known as Mwarubaine, Acacia mellifera.",
    image: carrywater
  },
  {
    title: "Ethnobotanical",
    description:"This will gather knowledge on the local uses of plant species within the forest, which include medicinal value of various trees in the forest, interviews with local communities and discussions during participatory resource mapping will provide essential information on herbs used and where they are found in the Forest.",
    image: whiteflower
  },
  {
    title: "Farming and processing of fruit trees",
    description:"This will involve purchase of fruit tees seedlings propagated at Laikipia permaculture Limited. The fruit tree seedlings will include mango, orange/pixies, avocado, tree tomato and passion fruitsThe fruit trees seedlings will be given to each user group to plant and take care of the trees until they mature upon which the harvested fruits will be sold at market price and the excess fruits will be produced to make juice and fruit jam which upon packaging will be sold to nearby shops and supermarkets hence improving the financial status of the community which will translate to improved livelihoods. The fruit trees will improve the vegetation cover in the region preventing soil erosion and increasing the water towers thereby mitigating the effects of climate change which is the overall objective of the organization.",
    image: waterplants
  },
  {
    title: "Eco-tourism",
    description: "Samburu County boasts of having the largest number of wildlife outside the game reserve. Some of the wild animals found in the County include; giraffes, the endangered gravy zebra, lions, elephants, and buffalos in addition to other small wildlife, The Ndoto mountain is a natural habitat to most wildlife and hence attracting both foreign and local tourist. This will be done through establishment of campsites, forest walks/ nature trails, and birdwatching. The Ndoto Mountain is surrounded by beautiful sceneries ideal for tourism. Establishment of the Community forest conservation organization will greatly improve the livelihood standards of the community members and greatly help in conservation of the forest through re-afforestation and bee keeping activities which will help conserve indigenous trees in the forest and planting of more indigenous trees to increase forest cover and increase the bee keeping activities die to availability of many trees. The aloe farming and later processing will 7 create employment opportunities in the regions as there will be a processing plant to process the aloe soap, aloe lotion and it’s by products.",
    image: bird
  },
  {
    title: "Eco-tourism",
    description: "Samburu County boasts of having the largest number of wildlife outside the game reserve. Some of the wild animals found in the County include; giraffes, the endangered gravy zebra, lions, elephants, and buffalos in addition to other small wildlife, The Ndoto mountain is a natural habitat to most wildlife and hence attracting both foreign and local tourist. This will be done through establishment of campsites, forest walks/ nature trails, and birdwatching. The Ndoto Mountain is surrounded by beautiful sceneries ideal for tourism. Establishment of the Community forest conservation organization will greatly improve the livelihood standards of the community members and greatly help in conservation of the forest through re-afforestation and bee keeping activities which will help conserve indigenous trees in the forest and planting of more indigenous trees to increase forest cover and increase the bee keeping activities die to availability of many trees. The aloe farming and later processing will 7 create employment opportunities in the regions as there will be a processing plant to process the aloe soap, aloe lotion and it’s by products.",
    image: bird
  },
  {
    title: "Eco-tourism",
    description: "Samburu County boasts of having the largest number of wildlife outside the game reserve. Some of the wild animals found in the County include; giraffes, the endangered gravy zebra, lions, elephants, and buffalos in addition to other small wildlife, The Ndoto mountain is a natural habitat to most wildlife and hence attracting both foreign and local tourist. This will be done through establishment of campsites, forest walks/ nature trails, and birdwatching. The Ndoto Mountain is surrounded by beautiful sceneries ideal for tourism. Establishment of the Community forest conservation organization will greatly improve the livelihood standards of the community members and greatly help in conservation of the forest through re-afforestation and bee keeping activities which will help conserve indigenous trees in the forest and planting of more indigenous trees to increase forest cover and increase the bee keeping activities die to availability of many trees. The aloe farming and later processing will 7 create employment opportunities in the regions as there will be a processing plant to process the aloe soap, aloe lotion and it’s by products.",
    image: bird
  },
  // Add more blog objects as needed
];

const Blog = () => {
  const navigate = useNavigate();

  const handleBlogClick = (title) => {
    navigate(`/blog/${title}`);
  };

  return (
    <div className="custom-desktop">
      <div className="custom-div">
        <div className="custom-text-wrapper">Blogs</div>
        <div className="custom-overlap-group">
          {blogs.map((blog, index) => (
            <div key={index} className="custom-blog" onClick={() => handleBlogClick(blog.title)}>
              <img
                className="custom-whatsapp-image"
                alt="Whatsapp image"
                src={blog.image} // Ensure this is a valid image source
                onClick={() => handleBlogClick(blog.title)}
              />
              <div className="custom-text-wrapper-2" onClick={() => handleBlogClick(blog.title)}>
                {blog.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

