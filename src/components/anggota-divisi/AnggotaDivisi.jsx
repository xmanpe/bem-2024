import React, {useState} from "react";
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
    const [hoveredRole, setHoveredRole] = useState(null);

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
                    desc={'Selain berperan aktif dalam mengawasi kinerja himpunan dibawah naungannya, SUFAK juga bertanggung jawab dalam menjalankan program kinerja internal BEM yaitu Student Association Awards (SAA) yang nantinya ditujukan kepada seluruh himpunan dibawah naungan BEM.'}
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

        return (
            <section className="anggota-divisi_section">
                <div className="top">
                    <div className="title">
                        <h1>{division.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: division.subtitle }}></p>
                    </div>
                    <div className="image-wrapper">
                        <Swiper
                            spaceBetween={16}
                            modules={[Navigation, Autoplay, A11y, Pagination]}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="mySwiper"
                        >
                            {division.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`${division.title} ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="middle">
                    <img src={division.element} alt="element" />
                    <p className="description" dangerouslySetInnerHTML={{ __html: division.description }}></p>
                </div>

                {renderAdditionalContent()}

                <div className={bottomClass}>
                    {division.members.map((member, index) => (
                        <div 
                            className="each-person"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(member.role)} 
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="image-person">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="title-person">
                                <h1>{member.name}</h1>
                                <p>{member.role}</p>
                            </div>
                            {hoveredRole === member.role && division.roleDescriptions && division.roleDescriptions[member.role] && (
                                <div className="role-popup">
                                    {division.roleDescriptions[member.role]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className="anggota-divisi">
            {renderContent()}
        </div>
    );
}

export default AnggotaDivisi;