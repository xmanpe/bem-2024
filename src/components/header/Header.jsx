import React from "react";
import './Header.scss';

// import Tab component
import Tab from '../tab/Tab';

const Header = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <section className="header">
            <div className="header-title">
                <h1>Anggota BEM GEN XIV</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas cras id nulla metus consectetur congue eros amet. Porttitor ipsum ut placerat magna cum purus leo.</p>
            </div>
            <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
    );
}
 
export default Header;