// import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
// import Home from "./Home"; // Import the Home component
// import "./App.css"; // Assuming you have a global App.css file for styling
// import Blog from "./Blog";

// const App = () => {
//   return (
//     <Router> {/* Wrap App with Router */}
//       <div className="App">
//         <Home /> {/* Render the Home component */}
//         <Blog />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import Home from "./Home";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



