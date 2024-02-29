import React, { useRef } from 'react'
import "./services.scss"
import { motion, useInView } from 'framer-motion'

function Services() {

    const variants={
        initial:{
            opacity:0,
            x:-500,
            y:100
        },
        animate:{
            opacity:1,
            x:0,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})

    return (
        <motion.div className='services' 
        variants={variants} 
        initial="initial" 
        // whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
        >


            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow<br />and move forward</p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business</h1>
                    <button>What We Do?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, iure.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, iure.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, iure.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, iure.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default Services