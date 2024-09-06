import React from "react";
import './AnggotaDivisi.scss';

// import swiper
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import component 
import SaaStukmCard from "../saa-stukm-card/SaaStukmCard";

// Import the division data
import { DivisiData } from './DivisiData';

const AnggotaDivisi = ({ activeTab }) => {
    const renderAdditionalContent = () => {

        if (activeTab === 'SUFAK') {
            return (
                <SaaStukmCard 
                    title={'Selain itu...'}
                    desc={'Selain berperan aktif dalam mengawasi kinerja himpunan dibawah naungannya, SUFAK juga bertanggung jawab dalam menjalankan program kinerja internal BEM yaitu Student Association Awards (SAA) yang nantinya ditujukan kepada seluruh himpunan dibawah naungan BEM.'}
                />
            );
        }

        if (activeTab === 'SUKM') {
            return (
                <div className="additional-content">
                    <h2>SUKM Special Component</h2>
                    <p>This is additional content specifically for the SUKM division.</p>
                </div>
            );
        }

        return null;
    };

    const renderContent = () => {
        const division = DivisiData[activeTab];
        
        if (!division) return null;

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

                {/* Additional content for SUFAK and SUKM */}
                {renderAdditionalContent()}

                <div className="bottom">
                    {division.members.map((member, index) => (
                        <div className="each-person" key={index}>
                            <div className="image-person">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="title-person">
                                <h1>{member.name}</h1>
                                <p>{member.role}</p>
                            </div>
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