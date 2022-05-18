import {motion} from 'framer-motion';
import { PortfolioItems } from './PortfolioItems';



import {Container} from './styles';

export function Portfolio() {

  return(
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >
      <Container>
        <div>
          <h2>PORFOLIO</h2>
          <p>My Work</p>
        </div>

      <PortfolioItems />

      </Container>
    
    </motion.div>
  )
}