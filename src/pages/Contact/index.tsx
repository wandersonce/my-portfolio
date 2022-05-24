import Lottie from 'react-lottie';

import contactAnimation from '../../assets/lotties/envelope.json'
import Socials from '../../components/Socials';

import { Container } from "./styles";

export function Contact() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
  };
  
  return(
    <Container>
        <div>
          <h2>GET IN TOUCH</h2>
          <p>Contact</p>
        </div>
        <p>Let's skip the boring process of form submission, contact me from wherever you want.</p>

        <div className="contact-Wrapper">
          <div>
            <a href="mailto:wanderson.o.castro@gmail.com" target="_blank" rel="noreferrer">
          <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              />
              </a>
          </div>
          <div>
            <p>My Socials:</p>
            <Socials />
            <p>Email: <a href="mailto:wanderson.o.castro@gmail.com" target="_blank" rel="noreferrer">wanderson.o.castro@gmail.com</a></p>
          </div>
        </div>

    </Container>
  )
}