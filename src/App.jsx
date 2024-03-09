import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Home from "./Home";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import DestinationHighlight from "./bloger";
import Ndoto from "./Ndoto";
import Home2 from "./Home2";

const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home2 />} />
          {<Route path="/blog" element={<Blog />} /> }
          <Route path="/blog/:title" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
    </div>

      

  );
};

export default App;








