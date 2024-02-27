import React from 'react'
import "./hero.scss"

function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>SUNNY KUMAR</h2>
                <h1>Web Developer and Data Engineer</h1>
                <div className="buttons">
                    <button>See the Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero