import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {

    const poper = {
        open: {
            transition: {
                staggerChildren: 0.1
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }

    }

    const itemVar = {
        open: {
            y:0,
            opacity:1
        },
        closed: {
            // transition:{delay:0.4},
            y:50,
            opacity:0
        }

    }

    const items = [
        "HomePage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

    return (
        <motion.div className='links' variants={poper}>
            {items.map(x => (<motion.a variants={itemVar} whileHover={{scale:1.1}} whileTap={{scale:0.95}} href={`#${x}`} key={x}>{x}</motion.a>))}
        </motion.div>
    )

}

export default Links;