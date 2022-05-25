import Lottie from 'react-lottie';
import TypeAnimation from 'react-type-animation';

import webDevelopment from '../../assets/lotties/webdevelopment.json'

import { Container, FixedBack, SkillsWrapper } from "./styles";

export function Skills() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webDevelopment,
  };
  
  return(
    <Container>
          <div>
            <h2>MY SKILLS</h2>
            <p>Expert in</p>
        </div>
      
        <SkillsWrapper>
        <TypeAnimation
              cursor={false}
              sequence={['<> Front-end Developer </>', 2000, '']}
              wrapper="h3"
              repeat={Infinity}
            />
          <div>
            <div>
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              />
            </div>
            <div>
              <div><img src={require('../../assets/skills/html5-css3.png')} alt="Html Css Logo" /> HTML & CSS</div>
              <div> <img src={require('../../assets/skills/javascript.png')} alt="JavaScript Logo" /> JavaScript</div>
              <div> <img src={require('../../assets/skills/typescript.png')} alt="TypeScript Logo" /> TypeScript</div>
              <div> <img src={require('../../assets/skills/jquery.png')} alt="jQuery Logo" /> jQuery</div>
              <div> <img src={require('../../assets/skills/bootstrap.png')} alt="Bootstrap Logo" /> Bootstrap</div>
              <div> <img src={require('../../assets/skills/tailwindcss.png')} alt="Tailwind Logo" /> Tailwind Css</div>
              <div> <img src={require('../../assets/skills/reactjs.png')} alt="ReactJs Logo" /> ReactJs</div>
              <div> <img src={require('../../assets/skills/nextjs.png')} alt="NextJs Logo" /> NextJs</div>
              <div> <img src={require('../../assets/skills/sass.webp')} alt="Sass Logo" /> Sass</div>
              <div> <img src={require('../../assets/skills/php.png')} alt="Php Logo" /> Php</div>
              <div> <img src={require('../../assets/skills/sql.png')} alt="Sql Logo" /> MySql</div>
            </div>
          </div>
        </SkillsWrapper>

        <FixedBack>
          <div>
            <img src={require('../../assets/happy.png')} alt="Happy Face" />
          </div>
          <div>
          <img src={require('../../assets/projectDone.png')} alt="Project Done" />
          </div>
          <div>
          <img src={require('../../assets/award.png')} alt="Award" />
          </div>
        </FixedBack>
    </Container>
  )
}