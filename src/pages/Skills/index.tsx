import Lottie from 'react-lottie';
import TypeAnimation from 'react-type-animation';

import webDevelopment from '../../assets/lotties/webdevelopment.json'

import { Container, FixedBack, SkillsWrapper } from "./styles";

import HtmlCss from '../../assets/skills/html5-css3.png'

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
              sequence={['<> Front-end Developer </>', 1000, '']}
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
              <img src={HtmlCss} alt="Html Css Logo" />
              <img src={HtmlCss} alt="Html Css Logo" />
              <img src={HtmlCss} alt="Html Css Logo" />
              <img src={HtmlCss} alt="Html Css Logo" />
              <img src={HtmlCss} alt="Html Css Logo" />
              <img src={HtmlCss} alt="Html Css Logo" />
            </div>
          </div>
        </SkillsWrapper>

        <FixedBack />
    </Container>
  )
}