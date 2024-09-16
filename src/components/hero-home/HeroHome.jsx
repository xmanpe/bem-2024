import React from "react";
import './HeroHome.scss';

// import components
import Button from '../cta/Button';

const HeroHome = () => {
    return (
        <div className="hero-home_section">   
            <div className="hero-home-title">
                <div className="title-top">
                    <p>BEM UMN <span>GEN XIV</span></p>
                    <h1>Commit. Solid. Integrated.</h1>
                </div>
                <p>Badan Eksekutif Mahasiswa Universitas Multimedia Nusantara merupakan organisasi kemahasiswaan resmi di tingkat universitas di bawah Rektorat Bidang Kemahasiswaan.</p>
            </div>
            <div className="button-wrapper">
                <Button variant="primary" section="">
                    Tentang kami
                </Button>
                <Button variant="secondary" to="/">
                    Program kerja
                </Button>
            </div>
        </div>
    );
}
 
export default HeroHome;