import {motion} from 'framer-motion';
export function About() {

  return(
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >
      
    <h1>ABOUT</h1>
    </motion.div>
  )
}