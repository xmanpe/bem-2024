import React from "react";
import './AnggotaDivisi.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import images
import fotoTest from '../../images/foto-divisi/bph/foto-1.png';
import fotoTest2 from '../../images/foto-divisi/bph/foto-2.png';

import sherly from '../../images/foto-divisi/bph/member/sherly.png';
import vidy from '../../images/foto-divisi/bph/member/vidy.png';
import nicholas from '../../images/foto-divisi/bph/member/nicholas.png';
import amanda from '../../images/foto-divisi/bph/member/amanda.png';

// import elements
import elementBPH from '../../images/element/grow.svg';

const AnggotaDivisi = () => {
    return (
        <section className="anggota-divisi_section">
            <div className="top">
                <div className="title">
                    <h1>BPH</h1>
                    <p>Badan Pengurus Harian</p>
                </div>
                <div className="image-wrapper">
                    <Swiper
                        spaceBetween={16}
                        modules={[Navigation, Autoplay, A11y, Mousewheel, Pagination]}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                        mousewheel={false}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={fotoTest} alt="foto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={fotoTest2} alt="foto" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="middle">
                <img src={elementBPH} alt="" />
                <p className="description">
                <span>Badan Pengurus Harian</span>, merupakan divisi yang bertanggung jawab dalam melakukan koordinasi terkait program kerja, mengawasi kinerja dari masing-masing anggota divisi, serta bertugas dalam pengelolaan keuangan serta hal administratif BEM UMN.
                </p>
            </div>
            <div className="bottom">
                <div className="each-person">
                    <div className="image-person">
                        <img src={sherly} alt="person" />
                    </div>
                    <div className="title-person">
                        <h1>Sherly</h1>
                        <p>Ketua</p>
                    </div>
                </div>
                <div className="each-person">
                    <div className="image-person">
                        <img src={nicholas} alt="person" />
                    </div>
                    <div className="title-person">
                        <h1>Nicholas Prawira</h1>
                        <p>Wakil Ketua</p>
                    </div>
                </div>
                <div className="each-person">
                    <div className="image-person">
                        <img src={vidy} alt="person" />
                    </div>
                    <div className="title-person">
                        <h1>Vidy Tandiono</h1>
                        <p>Sekben 1</p>
                    </div>
                </div>
                <div className="each-person">
                    <div className="image-person">
                        <img src={amanda} alt="person" />
                    </div>
                    <div className="title-person">
                        <h1>Amanda Nicole</h1>
                        <p>Sekben 2</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default AnggotaDivisi;