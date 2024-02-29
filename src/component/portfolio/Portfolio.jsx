import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Portfolio Website",
        img: "/notes_app.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, cupiditate eligendi. Alias cupiditate, cumque beatae quis repellendus nisi, labore sapiente dolorem dolorum iusto tempore adipisci. Dicta temporibus hic ad a."
    },
    {
        id: 2,
        title: "Picky Notes App",
        img: "/notes_app.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, cupiditate eligendi. Alias cupiditate, cumque beatae quis repellendus nisi, labore sapiente dolorem dolorum iusto tempore adipisci. Dicta temporibus hic ad a."
    },
    {
        id: 3,
        title: "Car E-Commerce Website",
        img: "/notes_app.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, cupiditate eligendi. Alias cupiditate, cumque beatae quis repellendus nisi, labore sapiente dolorem dolorum iusto tempore adipisci. Dicta temporibus hic ad a."
    },
    {
        id: 4,
        title: "Dragon Game",
        img: "/notes_app.png",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, cupiditate eligendi. Alias cupiditate, cumque beatae quis repellendus nisi, labore sapiente dolorem dolorum iusto tempore adipisci. Dicta temporibus hic ad a."
    }
];


function Single({ x }) {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);


    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={x.img} alt="" />
                    </div>
                    <motion.div
                        style={{y:y}}
                        className="textContainer">
                        <h2>{x.title}</h2>
                        <p>{x.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });



    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single x={item} key={item.id}>{item}</Single>
            ))}
        </div>
    )
}

export default Portfolio