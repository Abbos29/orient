import React from 'react'
import './Video.scss'
import { Fade } from 'react-reveal'

const Video = () => {
    return (
        <section className="video">
            <div className="container">
                <Fade top>
                    <div className="video__box">
                        <img src="./logo-main.svg" alt="img" />
                    </div>

                </Fade>

            </div>
        </section>
    )
}

export default Video