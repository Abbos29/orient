import React, { useEffect, useRef } from 'react'
import './Header.scss'

import ScrollReveal from 'scrollreveal'

const Header = () => {

    const menuRef = useRef(null)

    useEffect(() => {
        const menuItems = [...menuRef.current.children]

        const scrollRevealInstance = ScrollReveal({
            origin: 'top',
            distance: '20px',
            duration: 1000,
            delay: 100,
            easing: 'ease',
            reset: true
        });

        if(menuItems.length > 0) {
            menuItems.forEach((menuItem) => {
                scrollRevealInstance.reveal(menuItem)
            })
        }

        return () => {
            scrollRevealInstance.destroy()
        }
    }, [])

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__menu" ref={menuRef}>
                        <a href="">Компания</a>
                        <a href="">Услуги</a>
                        {/* <a href="">Проекты</a> */}
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