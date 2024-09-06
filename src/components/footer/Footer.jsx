import React from "react";
import "./Footer.scss";

// Import images
import bemlogo from '../../images/logo/bem-large.png';

// Import icons
import email from '../../images/icon/email.svg';
import facebook from '../../images/icon/facebook.svg';
import instagram from '../../images/icon/instagram.svg';
import linkedin from '../../images/icon/linkedin.svg';
import line from '../../images/icon/line.svg';
import x from '../../images/icon/x.svg';
import youtube from '../../images/icon/youtube.svg';

const socialMediaLinks = [
    { icon: email, name: "Email", link: "#" },
    { icon: facebook, name: "Facebook", link: "#" },
    { icon: instagram, name: "Instagram", link: "#" },
    { icon: line, name: "Line", link: "#" },
    { icon: linkedin, name: "LinkedIn", link: "#" },
    { icon: x, name: "X (Twitter)", link: "#" },
    { icon: youtube, name: "YouTube", link: "#" },
];

const footerLinks = [
    { name: "SOP BEM GEN XIV", link: "#" },
    { name: "Kalender Kemahasiswaan 2024", link: "#" },
    { name: "Daftar Referensi & Daftar Hitam", link: "#" },
];

const contactPersons = [
    { name: "Gabriella Christina", link: "#" },
    { name: "Chrystyana Trifia", link: "#" },
    { name: "Ryo Antonio", link: "#" },
];

const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="top">
                <div className="left">
                    <div className="bem-logo">
                        <img src={bemlogo} alt="BEM Universitas Multimedia Nusantara Logo" />
                    </div>
                    <div className="left-title">
                        <div className="each-title">
                            <h1>Universitas Multimedia Nusantara</h1>
                            <p className="address">Jl. Scientia Boulevard, Gading Serpong, Tangerang, Banten 15811</p>
                        </div>
                        <div className="each-title">
                            <h1>Badan Eksekutif Mahasiswa UMN</h1>
                            <p className="address">New Media Tower (Gedung C), Lt. 5, Ruang 511</p>
                        </div>
                    </div>
                    <div className="social-media-wrapper">
                        {socialMediaLinks.map((social, index) => (
                        <div className="each-social-media" key={index}>
                            <img src={social.icon} alt={`${social.name} Icon`} />
                            <a href={social.link}>{social.name}</a>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="each-text">
                        <h1>Tautan</h1>
                        <div className="link-wrapper">
                        {footerLinks.map((link, index) => (
                            <a href={link.link} key={index}>{link.name}</a>
                        ))}
                        </div>
                    </div>
                    <div className="each-text">
                        <h1><i>Contact Person</i></h1>
                        <div className="link-wrapper">
                        {contactPersons.map((contact, index) => (
                            <a href={contact.link} key={index}>{contact.name}</a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p className="copyright">Ⓒ 2024 BEM Universitas Multimedia Nusantara</p>
                <p className="designed">
                Situs di desain dan dikembangkan oleh <span className="artis">Daffa Akbari</span> | Per 8 September 2024
                </p>
            </div>
        </footer>
    );
}

export default Footer;