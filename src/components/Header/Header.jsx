import React, { useEffect, useRef } from 'react'
import './Header.scss'
import { Fade, Rotate } from 'react-reveal'


const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <Fade top>
                    <nav className="header__nav">


                        <div className="header__menu">
                            <a href="#about">Компания</a>
                            <a href="#services">Услуги</a>
                            {/* <a href="">Проекты</a> */}
                            <a href="#contacts">Контакты</a>
                        </div>


                        <div className="burger">
                            <img src="./burger.svg" alt="burger" />
                        </div>
                    </nav>
                </Fade>

                <Fade>

                    <div className="header__logo">
                        <img src="./logo-main.svg" alt="logo" />
                    </div>

                </Fade>
            </div>
        </header>
    )
}

export default Header