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
      <div>
      <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              />
      </div>
      <div></div>
    </Container>
  )
}