import React from 'react'
import './About.scss'
import { Fade } from 'react-reveal'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__box">
                    <Fade top>
                        <h2 className="about__title section-title">О КОМПАНИИ</h2>

                    </Fade>
                    <Fade top>

                        <p className='about__text section-text'>ORIENT MEDIA DEVELOPMENT, стремится создавать инновационные, устойчивые и функциональные строительные проекты, отвечающие потребностям наших клиентов и способствующие развитию локальных сообществ.</p>
                    </Fade>
                </div>
            </div>

            <Fade top>

                <div className="about__inner">
                    <div className="about__inner-box">
                        <img src="./about-1.svg" alt="icon" />
                        <img src="./about-2.svg" alt="icon" />
                        <img src="./about-3.svg" alt="icon" />
                    </div>
                </div>
            </Fade>

            <div className="container">
                <div className="about__wrapper">
                <Fade left>

                    <div className="about__item">
                        <h2 className="about__title section-title">ЦЕЛИ КОМПАНИИ</h2>
                        <ol>
                            <li>Обеспечить высокое качество строительства и обслуслуживания для всех наших проектов.</li>
                            <li>Применять передовые технологии и методы для улучшения эффективности наших строительных процессов.</li>
                            <li>Укреплять партнерские отношения с нашими клиентами и поставщиками, строя долгосрочные партнерства на основе доверия и взаимной выгоды.</li>
                        </ol>
                    </div>
                </Fade>

                <Fade right>

                    <div className="about__item">
                        <h2 className="about__title section-title">ЗАДАЧИ КОМПАНИИ</h2>
                        <ol>
                            <li>Развивать и внедрять новые методы и технологии в строительной отрасли.</li>
                            <li>Обеспечивать безопасность и здоровье наших сотрудников на рабочем месте.</li>
                            <li>Стремиться к экологической устойчивости в наших строительных проектах.</li>
                        </ol>
                    </div>
                </Fade>
                </div>

                <div className="about__cards">
                <Fade bottom>
                    <div className="about__card">
                        <img src="./about-card-1.jpeg" alt="card" />
                    </div>

                </Fade>

                <Fade bottom>

                    <div className="about__cards-inner">
                        <div className="about__card">
                            <img src="./about-card-2.jpeg" alt="card" />
                        </div>

                        <div className="about__card">
                            <img src="./about-card-3.jpeg" alt="card" />
                            {/* <button className='btn'>Перейти</button> */}
                            <p>Укрепляйте партнерские <br /> отношения с поставщиками</p>
                        </div>
                    </div>

                </Fade>

                </div>
            </div>


        </section>
    )
}

export default About