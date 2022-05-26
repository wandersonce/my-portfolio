import Lottie from 'react-lottie';

import { Container } from "./styles";

import webDevelopment from '../../assets/lotties/webanimation.json'

export function Experience() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webDevelopment,
  };
  return(
    <Container>
      <div className="header-wrapper">
        <div>
        <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                />
        </div>
        <div>
            <div>
                <h2>EXPERIENCE</h2>
                <p>Jobs So Far</p>
            </div>
        </div>
      </div>
      <div className="experience-wrapper">

      </div>
    </Container>
  )
}