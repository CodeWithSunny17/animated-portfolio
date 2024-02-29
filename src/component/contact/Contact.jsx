import React from 'react'
import "./contact.scss"
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

function Contact() {
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div variants={variants} className="textContainer">
                <motion.h1 variants={variants}>Contact Me</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Email</h2>
                    <span>sunny274.kr@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>sample add</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Contact</h2>
                    <span>sample contact</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">

                <motion.div className="phoneSVG" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    
                    {/* <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                        <path
                            strokewidth={0.2} 
                            fill="none" 
                            d="M35.59,5.5H12.41a4.57,4.57,0,0,0-4.56,4.57V31.32a4.58,4.58,0,0,0,4.56,4.57h10V42.5L29,35.89h6.56a4.58,4.58,0,0,0,4.56-4.57V10.07A4.57,4.57,0,0,0,35.59,5.5Z"
                        />
                    </svg> */}
                                       
                </motion.div>

                <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
                    <input type="text" placeholder='Name' required />
                    <input type="text" placeholder='Email' required />
                    <textarea name="" id="" cols="30" rows="7" placeholder='Message' />
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact