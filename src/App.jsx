import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// import images
import fadeBottom from './images/vector/fade-bottom.svg';

// import pages
import Home from "./pages/home/Home";
import Anggota from "./pages/anggota/Anggota";

const App = () => {
  return (
    <div className="bem">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anggota" element={<Anggota />} />
        </Routes>
        <Navbar />
        {/* <Footer /> */}
      </Router>
      {/* <img
        src={fadeBottom} 
        alt="fade-bottom" 
        className="fade-bottom" 
        style={{
          position: 'fixed',
          bottom: -20,
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      /> */}
    </div>
  );
}
 
export default App;