import {motion} from "framer-motion";
import { useState } from "react";

const test = () => {

  const [open, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0.25, scale: 0.75 },
    visible: {
      opacity: 1, 
      scale: 1, 
      // x:100, 
      transition:{
        // type:"spring", 
        // stiffness:200,      //fluedity
        // damping:100      //hardness
        staggerChildren: 0.5
      }
    }
  };

  const items=["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
        {/* <motion.div 
          className="box" 
          //----varients is not working, why?-----
          // variants={container}
          // initial="hidden"
          // transition={{duration:0.5}}
          // animate="visible"


          //----useState----
          variants={container}
          animate={open ? "visible": "hidden"}


          // ----normally----
          // initial={{opacity: 0.7, scale: 0.7}} 
          // transition={{duration:0.55}} 
          // whileHover={{opacity:1, scale: 1.2}}
          // whileTap={{opacity:1, scale:1}} 
          // whileInView={{opacity:1, scale:1}}
          // drag
        ></motion.div> */}
        
        {/* <button onClick={()=>setOpen(prev=>(prev ? false : true))}>Button</button> */}

        <motion.ul variants={container} initial="hidden" animate="visible">
          {items.map(x=>(
            <motion.li key={x} variants={container}>{x}</motion.li>
          ))}
        </motion.ul>
    </div>
  )
}

export default test