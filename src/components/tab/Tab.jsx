import React, { useState } from "react";
import './Tab.scss';

// import icons
import arrowDown from '../../images/icon/arrow-down.svg';

const Tab = ({ tabs, activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="tab-desktop">
                {tabs.map((tab, index) => (
                    <div 
                        key={index}
                        className={`each-tab ${activeTab === tab ? "active" : ""}`} 
                        onClick={() => setActiveTab(tab)}
                    >
                        <p>{tab}</p>
                    </div>
                ))}
            </div>

            <div className="tab-mobile">
                <div className="mobile-active" onClick={() => setIsOpen(!isOpen)}>
                    <p>{activeTab}</p>
                    <img src={arrowDown} alt="arrow" className={isOpen ? "open" : ""} />
                </div>
                {isOpen && (
                    <div className="tab-wrapper">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`each-tab ${activeTab === tab ? "active" : ""}`} 
                                onClick={() => {
                                    setActiveTab(tab);
                                    setIsOpen(false);
                                }}
                            >
                                <p>{tab}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Tab;