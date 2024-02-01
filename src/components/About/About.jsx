import React from 'react'
import './About.scss'

const About = () => {
  return (
    <section className="about">
        <div className="container">
            <div className="about__box">
                <h2 className="about__title section-title">О КОМПАНИИ</h2>
                <p className='about__text section-text'>ORIENT MEDIA DEVELOPMENT, стремится создавать инновационные, устойчивые и функциональные строительные проекты, отвечающие потребностям наших клиентов и способствующие развитию локальных сообществ.</p>
            </div>
        </div>

        <div className="about__inner">
            <div className="about__inner-box">
                <img src="./about-1.svg" alt="icon" />
                <img src="./about-2.svg" alt="icon" />
                <img src="./about-3.svg" alt="icon" />
            </div>
        </div>

        <div className="container">
            <div className="about__wrapper">
                <div className="about__item">
                    <h2 className="about__title section-title">ЦЕЛИ КОМПАНИИ</h2>
                    <ol>
                        <li>Обеспечить высокое качество строительства и обслуслуживания для всех наших проектов.</li>
                        <li>Применять передовые технологии и методы для улучшения эффективности наших строительных процессов.</li>
                        <li>Укреплять партнерские отношения с нашими клиентами и поставщиками, строя долгосрочные партнерства на основе доверия и взаимной выгоды.</li>
                    </ol>
                </div>

                <div className="about__item">
                    <h2 className="about__title section-title">ЗАДАЧИ КОМПАНИИ</h2>
                    <ol>
                        <li>Развивать и внедрять новые методы и технологии в строительной отрасли.</li>
                        <li>Обеспечивать безопасность и здоровье наших сотрудников на рабочем месте.</li>
                        <li>Стремиться к экологической устойчивости в наших строительных проектах.</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About