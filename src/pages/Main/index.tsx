import {motion} from 'framer-motion';
import { Container } from "./styles"

import Selfie from '../../assets/selfie.png';
import Particles from '../../components/Particles';

export function Main() {

  return(
    <Container>
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >
    <div>
      <img src={Selfie} alt="Wanderson's Selfie" />
    </div>
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