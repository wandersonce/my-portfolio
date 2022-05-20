import {motion} from 'framer-motion';
import {Link} from "react-router-dom";

import Education from './Education';
import { Container } from './styles';

export function About() {

  return(
    <motion.div 
    className="center-container"
    initial={{ opacity: 0 }}
    animate={{opacity:1}}
    exit={{ opacity: 0 }}
    >

      <Container>
        <div className="about-wrapper">
          <div></div>
          <div>
            <div className="title-wrapper">
              <h2>ABOUT ME</h2>
              <p className="subtitle-header">Who I am</p>
              </div>
              <p>
              I am Brazilian, I have lived in Canada since 2018, since I was a child I have been involved with technology and news. When I was a kid I always liked to create and develop servers for the games I played and that's how my desire to learn more about the development area grew.
              </p>
              <p> Highly poised and dedicated with strong education and training in
                    design principles and programming languages.
                    Enthusiastic about meeting and exceeding customer and user expectations with successful website development. Well-versed in
                    validating and debugging code in order to resolve user and performance issues.</p>
            <div className="button-wrapper">
              <a target="_blank" href={require('../../assets/resume.pdf')} rel="noreferrer" >SEE RESUME</a>
              <Link to="/contact"> CONTACT ME</Link>
            </div>
          </div>
        </div>

        <Education />
      </Container>
      
    </motion.div>
  )
}