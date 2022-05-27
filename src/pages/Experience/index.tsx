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
                <a target="_blank" href={require('../../assets/resume.pdf')} rel="noreferrer" >SEE RESUME</a>
        </div>
      </div>
      <div className="experience-wrapper">
        <div>
            <p className="company-name">General Internet</p>
            <p className="position">Frontend Developer</p>
            <p className="work-date">11/2021 – Now</p>
        </div>
        <div>
            <ul>
              <li>Build a custom WordPress Website based on the offered mockup.</li>
              <li>Build and Customize ecommerces on Wordpress and Shopify.</li>
              <li>Build Websites using HTML/CSS/JavaScript.</li>
              <li>Web maintenance (updates) on previously built web pages.</li>
              <li>Create and optimize content for websites using various graphics, databases, animations, and software.</li>
              <li>Develop websites architecture and determine hardware and software requirements.</li>
              <li> Research and evaluate a variety of interactive media products.</li>
              <li> Conduct tests and perform security and quality assurance on new and existing web pages.</li>
              <li> Setup DNS Server and SSL Certificates.</li>
              <li> Deploy, Maintain, and move websites.</li>
            </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
            <p className="company-name">Diluceo</p>
            <p className="position">Web Developer -Freelancer</p>
            <p className="work-date">06/2021 – Now</p>
        </div>
        <div>
            <ul>
              <li>Create custom code for responsive websites based on an approved mockup from the design team and client.</li>
              <li>Build and Customize ecommerces on Wordpress and Shopify.</li>
              <li>Build Websites using HTML/CSS/JavaScript.</li>
              <li>Web maintenance (updates) on previously built web pages.</li>
              <li>Create and optimize content for websites using various graphics, databases, animations, and software.</li>
              <li>Develop websites architecture and determine hardware and software requirements.</li>
            </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
            <p className="company-name">Flinnwest Solutions Inc. </p>
            <p className="position">Web Developer</p>
            <p className="work-date">08/2020 – 11/2021</p>
        </div>
        <div>
            <ul>
              <li>Create custom code for websites based on an approved mockup from the design team and client.</li>
              <li> Web maintenance (updates) on previously built web pages</li>
              <li>Create and optimize content for websites using various graphics, databases, animations, and software.</li>
              <li>Develop websites architecture and determine hardware and software requirements.</li>
              <li> Research and evaluate a variety of interactive media products.</li>
              <li> Conduct tests and perform security and quality assurance on new and existing web pages.</li>
              <li> Setup DNS Server and SSL Certificates.</li>
              <li> Deploy, Maintain, and move websites.</li>
            </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
            <p className="company-name">Economix Supermarket</p>
            <p className="position">IT Support Specialist</p>
            <p className="work-date">02/2017 - 09/2017</p>
        </div>
        <div>
            <ul>
              <li>Documentation of incidents and problems solved on Help Desk System.</li>
              <li>Data entry.</li>
              <li>Configure computers and networks.</li>
              <li>Oversee and support all IT problems in all sectors.</li>
              <li> Guarantee that knowledge bases and online docs are updated.</li>
              <li>Basic maintenance on printers.</li>
              <li> Configuring Network Devices.</li>
              <li> Tech support to client systems and office automation.</li>
            </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
            <p className="company-name">Economix Supermarket</p>
            <p className="position">IT Support Specialist</p>
            <p className="work-date">02/2017 - 09/2017</p>
        </div>
        <div>
            <ul>
              <li>Documentation of incidents and problems solved on Help Desk System.</li>
              <li>Data entry.</li>
              <li>Configure computers and networks.</li>
              <li>Assist IT support analysts in solving more complex issues.</li>
              <li> Tech support to client systems and office automation.</li>
            </ul>
        </div>
      </div>
    </Container>
  )
}