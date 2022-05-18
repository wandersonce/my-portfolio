import {motion} from 'framer-motion';
import { Container } from "./styles"

export function Main() {

  return(
    <Container>
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >
    <div></div>
    <div>
      <h1 className="fadeIn-item">
      I'm <br />
      Wanderson <br />
      Castro
    </h1>
    <h3>Front-end Developer</h3>
    </div>
  </motion.div>
 </Container>
  )
}