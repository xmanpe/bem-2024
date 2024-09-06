import React, {useState} from "react";
import './SaaStukmCard.scss';

// import component

import Button from "../cta/Button";

const SaaStukmCard = ({ title, desc, link }) => {
    
    const handleButton = () => {

    }

    return (
        <div className="saa-stukm-card">
            <div className="text-card">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <Button variant="secondary-outline-white" to='/saa'>
                Selengkapnya
            </Button>
        </div>
    );
}
 
export default SaaStukmCard;