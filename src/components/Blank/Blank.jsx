import React from 'react'
import './Blank.scss'
import { Fade } from 'react-reveal'

const Blank = () => {
  return (
    <section className="blank">
      <div className="container">
        <Fade top>
          <div className="blank__box">
            <img src="./logo-main.svg" alt="img" />
          </div>

        </Fade>
      </div>
    </section>
  )
}

export default Blank