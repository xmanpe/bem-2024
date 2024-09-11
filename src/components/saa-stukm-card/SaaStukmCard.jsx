import React, { useState } from "react";
import './SaaStukmCard.scss';

// import component
import Button from "../cta/Button";

const SaaStukmCard = ({ title, desc, link, imageBackground }) => {
    
    const handleButton = () => {
        // Add your button click handler logic here
    }

    return (
        <div className="saa-stukm-card" style={{
            background: `linear-gradient(0deg, rgba(33, 114, 176, 0.80) 0%, rgba(33, 114, 176, 0.80) 100%), url(${imageBackground}) lightgray 50% / cover no-repeat`
        }}>
            <div className="text-card">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <Button variant="secondary-outline-white" to='/saa' onClick={handleButton}>
                Selengkapnya
            </Button>
        </div>
    );
}
 
export default SaaStukmCard;