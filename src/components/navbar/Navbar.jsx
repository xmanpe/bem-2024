import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.scss';

// import images
import bemLogo from '../../images/logo/bem.svg';
import list from '../../images/icon/menu.svg'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate('/'); 
    }

    return (
        <div className="navbar-overlay">
            <nav className="navbar">
                <div className="top">
                    <img src={bemLogo} alt="bem logo" onClick={handleLogo} />
                    <div className="navbar-menu">
                        {/* <div className="navbar-each-menu active">
                            <p>Beranda</p>
                        </div> */}
                        {/* <div className="navbar-each-menu">
                            <p>BEMInfo</p>
                        </div> */}
                        <div className="navbar-each-menu">
                            <img src={list} alt="list menu" />
                        </div>
                    </div>
                </div>
                {/* <div className="opened-menu">
                    hai
                </div> */}
            </nav>
        </div>
    );
}
 
export default Navbar;