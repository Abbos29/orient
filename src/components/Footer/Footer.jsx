import React from 'react'
import './Footer.scss'
import { Fade } from 'react-reveal'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <Fade bottom>
          <img className="footer__logo" src="./logo-main.svg" alt="logo" />

        </Fade>

        <Fade bottom>
          <div className="footer__menu">
            <a href="#">TWITTER</a>
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">PINTEREST</a>
          </div>

        </Fade>
      </div>
    </footer>
  )
}

export default Footer