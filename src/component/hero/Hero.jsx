import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'

const textVariants = {
    initial:{
        x:-500
    },
    final:{
        x:0,
        transition:{
            duration:1,
            staggerChildrem:0.9
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
            
        }
    }
}

const sliderVariants ={
    initial:{
        x:0
    },
    final:{
        x:"-220%",
        transition:{
            duration:21,
            repeat:Infinity,
            repeatType:"mirror"
        }
    }
}

function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants= {textVariants} initial="initial" animate="final">
                <motion.h2 variants= {textVariants}>SUNNY KUMAR</motion.h2>
                <motion.h1 variants= {textVariants}>Web Developer and Data Engineer</motion.h1>
                <motion.div className="buttons" variants= {textVariants}>
                    <motion.button variants= {textVariants}>See the motion.Latest Works</motion.button>
                    <motion.button variants= {textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants= {textVariants} animate="scrollButton"/>
            </motion.div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="final">LPU'2020 INFOSYS WEB DEV</motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero