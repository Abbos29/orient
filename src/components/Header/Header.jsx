import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <nav className="header__nav">
                <div className="header__menu">
                    <a href="">Компания</a>
                    <a href="">Услуги</a>
                    <a href="">Проекты</a>
                    <a href="">Контакты</a>
                </div>

                <div className="burger">
                    <img src="./burger.svg" alt="burger" />
                </div>
            </nav>

            <div className="header__logo">
                <img src="./logo-main.svg" alt="logo" />
            </div>
        </div>
    </header>
  )
}

export default Header