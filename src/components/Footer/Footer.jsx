import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">

            <img className="footer__logo" src="./logo-main.svg" alt="logo" />

            <div className="footer__menu">
                <a href="#">TWITTER</a>
                <a href="#">FACEBOOK</a>
                <a href="#">INSTAGRAM</a>
                <a href="#">PINTEREST</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer