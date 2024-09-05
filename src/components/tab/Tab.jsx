import React from "react";
import './Tab.scss';

// import icons
import arrowDown from '../../images/icon/arrow-down.svg';

const Tab = () => {
    return (
        <>
        <div className="tab-desktop">
            <div className="each-tab active">
                <p>BPH</p>
            </div>
            <div className="each-tab">
                <p>PR</p>
            </div>
            <div className="each-tab">
                <p>SUKMA</p>
            </div>
            <div className="each-tab">
                <p>SUFAK</p>
            </div>
            <div className="each-tab">
                <p>SULSO</p>
            </div>
        </div>
        <div className="tab-mobile">
            <div className="mobile-active">
                <p>BPH</p>
                <img src={arrowDown} alt="arrow" />
            </div>
            <div className="tab-wrapper">
                <div className="each-tab">
                    <p>BPH</p>
                </div>
                <div className="each-tab">
                    <p>PR</p>
                </div>
                <div className="each-tab">
                    <p>SUKMA</p>
                </div>
                <div className="each-tab">
                    <p>SUFAK</p>
                </div>
                <div className="each-tab">
                    <p>SULSO</p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Tab;