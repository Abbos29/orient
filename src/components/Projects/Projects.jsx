import React from 'react'
import './Projects.scss'
import '../../App.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Projects = () => {
    return (
        <section className="projects">
            <div className="container">

                <h2 className="section-title">ПРОЕКТЫ</h2>
            </div>

            <div className="about__inner">
                <p>КОНДОМИНИУМЫ</p>
                <p>КОММЕРЧЕСКИЙ/МЕДИЦИНСКИЙ ЦЕНТР</p>
                <p>АРЕНДА МНОГОКВАРТИРНЫХ ДОМОВ</p>
            </div>
            <div className="container">

                <div className="projects__wrapper">

                    <Swiper
                        slidesPerView={2.3}
                        spaceBetween={100}
                        // cssMode={true}
                        // navigation={true}
                        // mousewheel={true}
                        keyboard={true}

                        modules={[Navigation, Keyboard, Autoplay]}
                        autoplay={{
                            // delay: 2000,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <p>В процессе строительства использованы новейшие технологии и материалы</p>
                            <img src="./slide-1.jpeg" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Общая площадь 5,000 квадратных фунтов</p>
                            <img src="./slide-2.jpeg" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Высокое качество использовано в каждом проекте</p>
                            <img src="./slide-3.jpeg" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>В процессе строительства использованы новейшие технологии и материалы</p>
                            <img src="./slide-1.jpeg" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Общая площадь 5,000 квадратных фунтов</p>
                            <img src="./slide-2.jpeg" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>Высокое качество использовано в каждом проекте</p>
                            <img src="./slide-3.jpeg" alt="img" />
                        </SwiperSlide>

                    </Swiper>

                    <div className="swiper__btns">
                        <div className="swiper-button-prev">
                            <svg width="19.003906" height="13.322266" viewBox="0 0 19.0039 13.3223" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs />
                                <path id="Arrow 1" d="M19.0039 7.66113L1.00391 7.66113L1.00391 5.66113L19.0039 5.66113L19.0039 7.66113ZM2.41821 6.66113L7.36792 11.6108C7.76392 12.0068 7.76392 12.6292 7.36792 13.0251C6.97192 13.4211 6.34961 13.4211 5.95361 13.0251L0.296875 7.36816C-0.0991211 6.97217 -0.0991211 6.3501 0.296875 5.9541L5.95361 0.297119C6.34961 -0.098877 6.97192 -0.098877 7.36792 0.297119C7.76392 0.693115 7.76392 1.31543 7.36792 1.71143L2.41821 6.66113Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="#fff" />
                            </svg>

                        </div>
                        <div className="swiper-button-next">
                            <svg width="19.003906" height="13.322266" viewBox="0 0 19.0039 13.3223" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs />
                                <path id="Arrow 2" d="M0 5.66113L18 5.66113L18 7.66113L0 7.66113L0 5.66113ZM16.5857 6.66113L11.636 1.71143C11.24 1.31543 11.24 0.693115 11.636 0.297119C12.032 -0.098877 12.6543 -0.098877 13.0503 0.297119L18.707 5.9541C19.103 6.3501 19.103 6.97217 18.707 7.36816L13.0503 13.0251C12.6543 13.4211 12.032 13.4211 11.636 13.0251C11.24 12.6292 11.24 12.0068 11.636 11.6108L16.5857 6.66113Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="#fff" />
                            </svg>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Projects