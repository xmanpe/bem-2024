import React from "react";
import './Navbar.scss';

// import images
import bemLogo from '../../images/logo/bem.svg';
import list from '../../images/icon/menu.svg'

const Navbar = () => {
    return (
        <div className="navbar-overlay">
            <nav className="navbar">
                <img src={bemLogo} alt="bem logo" />
                <div className="navbar-menu">
                    <div className="navbar-each-menu active">
                        <p>Beranda</p>
                    </div>
                    <div className="navbar-each-menu">
                        <p>BEMInfo</p>
                    </div>
                    <div className="navbar-each-menu">
                        <img src={list} alt="list menu" />
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;