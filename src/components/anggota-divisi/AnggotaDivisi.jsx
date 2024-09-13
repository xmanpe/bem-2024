import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AnggotaDivisi.scss';
import { motion } from 'framer-motion';

// import swiper
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import component 
import SaaStukmCard from "../saa-stukm-card/SaaStukmCard";

// import images
import saa from '../../images/saa.jpeg';
import stukm from '../../images/stukm.jpeg';

// Import the division data
import { DivisiData } from './DivisiData';

const AnggotaDivisi = ({ activeTab }) => {
    const navigate = useNavigate();
    const [hoveredRole, setHoveredRole] = useState(null);

    const handleRoleClick = (role) => {
        const roleToPageMap = {
            'Spv. <span>UMN Festival 2024</span>': '/umn-festival-2024',
            'Spv. <span>MAXIMA 2024</span>': '/maxima-2024',
            'Spv. <span>Mr. & Ms. UMN 2024</span>': '/mr-ms-umn-2024',
            'Spv. <span>UMN ECO 2024</span>': '/umn-eco-2024',
            'Spv. <span>OMB UMN 2024</span>': '/omb-umn-2024',
            'Spv. <span>Starlight UMN 2024</span>': '/starlight-umn-2024',
        };

        if (roleToPageMap[role]) {
            navigate(roleToPageMap[role]);
        }
    };

    const handleMouseEnter = (role) => {
        setHoveredRole(role);
    };

    const handleMouseLeave = () => {
        setHoveredRole(null);
    };

    const renderAdditionalContent = () => {
        if (activeTab === 'SUFAK') {
            return (
                <SaaStukmCard 
                    title={'Selain itu...'}
                    desc={'SUFAK juga bertanggung jawab dalam menjalankan program kinerja internal BEM yaitu Student Association Awards (SAA) yang nantinya ditujukan kepada seluruh himpunan dibawah naungan BEM.'}
                    imageBackground={saa}
                    activeTab={'SUFAK'}
                />
            );
        }

        if (activeTab === 'SUKM') {
            return (
                <SaaStukmCard 
                    title={'Selain itu...'}
                    desc={'SUKM juga bertanggung jawab dalam menjalankan program kinerja internal BEM yaitu Serah Tahunan UKM (STUKM) yang nantinya ditujukan kepada seluruh UKM dibawah naungan BEM dan juga kegiatan Arkasa yang diawasi langsung oleh SUKM Seni Budaya.'}
                    imageBackground={stukm}
                    activeTab={'SUKM'}
                />
            );
        }

        return null;
    };

    const renderContent = () => {
        const division = DivisiData[activeTab];
        if (!division) return null;

        const bottomClass = activeTab === 'SULSO' ? 'bottom sulso-grid' : 'bottom';

        const sectionVariant = {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.section
                className="anggota-divisi_section"
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div className="top" variants={sectionVariant} transition={{ delay: 0.1 }}>
                    <div className="title">
                        <h1>{division.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: division.subtitle }}></p>
                    </div>
                    <div className="image-wrapper">
                        <Swiper
                            spaceBetween={16}
                            modules={[Navigation, Autoplay, A11y, Pagination]}
                            slidesPerView={1}
                            navigation={true}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={false}
                            className="mySwiper"
                        >
                            {division.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`${division.title} ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>

                <motion.div className="middle" variants={sectionVariant} transition={{ delay: 0.3 }}>
                    <img src={division.element} alt="element" />
                    <p className="description" dangerouslySetInnerHTML={{ __html: division.description }}></p>
                </motion.div>

                <motion.div className={bottomClass} variants={sectionVariant} transition={{ delay: 0.4 }}>
                    {division.members.map((member, index) => (
                        <div 
                            className="each-person"
                            key={index}
                        >
                            <div className="image-person">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="title-person">
                                <h1>{member.name}</h1>
                                <p
                                    onMouseEnter={() => handleMouseEnter(member.role)} 
                                    onMouseLeave={handleMouseLeave}
                                    dangerouslySetInnerHTML={{ __html: member.role }}
                                    onClick={() => handleRoleClick(member.role)}
                                ></p>
                            </div>
                            {hoveredRole === member.role && division.roleDescriptions && division.roleDescriptions[member.role] && (
                                <div className="role-popup">
                                    <p>{division.roleDescriptions[member.role]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {renderAdditionalContent()}
            </motion.section>
        );
    };

    return (
        <div className="anggota-divisi">
            {renderContent()}
        </div>
    );
}

export default AnggotaDivisi;