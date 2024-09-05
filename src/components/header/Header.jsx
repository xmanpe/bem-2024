import React from "react";
import './Header.scss';

// import components
import '../tab/Tab.jsx';
import Tab from "../tab/Tab";

const Header = () => {
    return (
        <section className="header">
            <div className="header-title">
                <h1>Anggota BEM GEN XIV</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas cras id nulla metus consectetur congue eros amet. Porttitor ipsum ut placerat magna cum purus leo.</p>
            </div>
            <Tab />
        </section>
    );
}
 
export default Header;