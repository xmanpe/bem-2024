import React from "react";
import './Header.scss';

// import Tab component
import Tab from '../tab/Tab';

const Header = ({ activeTab, setActiveTab, tabs, title, desc }) => {
    return (
        <section className="header">
            <div className="header-title">
                <h1>{title}</h1>
                {desc ? <p>{desc}</p> : null}
            </div>
            <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
    );
}
 
export default Header;