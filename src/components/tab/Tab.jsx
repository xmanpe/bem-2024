import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Tab.scss';

// import icons
import arrowDown from '../../images/icon/arrow-down.svg';
import check from '../../images/icon/check.svg';

const Tab = ({ tabs, activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <>
            <div className="tab-desktop">
                {tabs.map((tab, index) => (
                    <div 
                        key={index}
                        className={`each-tab ${activeTab === tab ? "active" : ""}`} 
                        onClick={() => setActiveTab(tab)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={tab}
                                initial={false}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.10 }}
                            >
                                {tab}
                            </motion.p>
                        </AnimatePresence>
                        {activeTab === tab && (
                            <motion.div
                                className="background"
                                layoutId="background"
                                initial={false}
                                animate={{ opacity: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="tab-mobile">
                <div className="mobile-active" onClick={() => setIsOpen(!isOpen)}>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab}
                        </motion.p>
                    </AnimatePresence>
                    <img src={arrowDown} alt="arrow" className={isOpen ? "open" : ""} />
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="tab-wrapper"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={wrapperVariants}
                        >
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
                                    {activeTab === tab && (
                                        <img src={check} alt="selected" />
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Tab;