import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/navbar/Navbar";

// import pages
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="bem">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}
 
export default App;