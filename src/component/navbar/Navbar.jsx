import React from 'react';
import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {

  const container = {
    hidden: { opacity: 0.25, scale: 0.75 },
    visible: {
      opacity: 1, 
      scale: 1, 
      x:100, 
      transition:{
        // type:"spring", 
        // stiffness:200,      //fluedity
        // damping:100      //hardness
        staggerChildren: 0.5
      }
    }
  };

  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span variants={container} initial="hidden" animate="visible">Sunny Kumar</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar