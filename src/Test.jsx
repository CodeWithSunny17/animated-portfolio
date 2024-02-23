import {motion} from "framer-motion";

const test = () => {
  return (
    <div className="course">
        <motion.div className="box" initial={{opacity: 0.7, scale: 1}} transition={{duration:0.25}} whileHover={{opacity:1, scale: 1.2}} drag></motion.div>
    </div>
  )
}

export default test