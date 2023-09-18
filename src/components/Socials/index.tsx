import { Container } from './styles';

// import Facebook from '../../assets/Icons/faceIcon.png';
// import Instagram from '../../assets/Icons/InstagramIcon.png';
import Linkedin from '../../assets/Icons/linkedinIcon.png';
import GitIcon from '../../assets/Icons/gitIcon.png';

function Socials() {
  return (
    <Container>
            <a href="https://www.linkedin.com/in/wandersondecastro/" target="_blank" rel="noreferrer">
        <img src={Linkedin} alt="Linkedin Icon" />
      </a>
      <a href="https://github.com/wandersonce" target="_blank" rel="noreferrer">
        <img src={GitIcon} alt="Github Icon" />
      </a>
      {/* <a href="https://www.facebook.com/wandersonoc" target="_blank" rel="noreferrer">
        <img src={Facebook} alt="Facebook Icon" />
      </a>
      <a href="https://www.instagram.com/bamgamesofc" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="Instagram Icon" />
      </a> */}
    </Container>
  )
}

export default Socials