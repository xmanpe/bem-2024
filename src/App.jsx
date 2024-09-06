import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

// import pages
import Home from "./pages/home/Home";
import Anggota from "./pages/anggota/Anggota";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bem">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anggota" element={<Anggota />} />
        </Routes>
        <Navbar />
        <Footer />
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={'<i>Website Under Development</i>'}
          message={`Website BEM masih dalam tahap awal pengembangan. Beberapa fitur dan informasi mungkin belum berfungsi dengan baik. <br><br>Untuk informasi lebih lengkap, silakan kunjungi Instagram <a href="https://www.instagram.com/bemumn" target="_blank">BEM UMN</a>. Terima kasih.`}
          buttonText="Siap"
        />
        
      </Router>
    </div>
  );
};

export default App;