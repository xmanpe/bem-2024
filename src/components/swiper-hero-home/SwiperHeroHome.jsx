import React from "react";
import './SwiperHeroHome.scss';
import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import images
import foto1 from '../../images/home/foto-1.jpeg';
import foto2 from '../../images/home/foto-2.jpeg';
import foto3 from '../../images/home/foto-3.jpeg';
import foto4 from '../../images/home/foto-4.jpeg';
import foto5 from '../../images/home/foto-5.jpeg';
import substract from '../../images/vector/substract.svg';

const SwiperHeroHome = () => {
    return (
        <div className="swiper-home">
            <img className="s-top" src={substract} alt="substract" />
            <div className="image-wrapper">
                <Swiper
                    spaceBetween={16}
                    modules={[Navigation, Autoplay, A11y, Mousewheel]}
                    breakpoints={{
                        432: {
                            slidesPerView: 2,
                        },
                        560: {
                            slidesPerView: 2,
                        },
                        810: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                        1920: {
                            slidesPerView: 4,
                        },
                    }}
                    scrollbar={{ draggable: true }}
                    mousewheel={false}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={foto1} alt="kevin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={foto3} alt="kevin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={foto2} alt="kevin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={foto4} alt="kevin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={foto5} alt="kevin" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <img className="s-bottom" src={substract} alt="substract" />
        </div>
    );
}
 
export default SwiperHeroHome;