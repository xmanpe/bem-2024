import React, { useState } from "react";
import './SaaStukmCard.scss';

// import component
import Button from "../cta/Button";

const SaaStukmCard = ({ title, desc, link, imageBackground, activeTab }) => {

    return (
        <div className="saa-stukm-card" style={{
            background: `linear-gradient(0deg, rgba(33, 114, 176, 0.80) 0%, rgba(33, 114, 176, 0.80) 100%), url(${imageBackground}) lightgray 50% / cover no-repeat`
        }}>
            <div className="text-card">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            {activeTab === 'SUFAK' && (
                <Button variant="secondary-outline-white" to={link}>
                    Selengkapnya
                </Button>
            )}
            {activeTab === 'SUKM' && (
                <div className="button-wrapper">
                    <Button variant="secondary-outline-white" to={link}>
                        Tentang STUKM
                    </Button>
                    <Button variant="secondary-outline-white" to={link}>
                        Tentang Arkasa
                    </Button>
                </div>
            )}
        </div>
    );
}
 
export default SaaStukmCard;