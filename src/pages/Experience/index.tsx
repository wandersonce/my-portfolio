import Lottie from 'react-lottie';

import { Container } from './styles';

import webDevelopment from '../../assets/lotties/webanimation.json';

export function Experience() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webDevelopment,
  };
  return (
    <Container>
      <div className="header-wrapper">
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div>
          <div>
            <h2>EXPERIENCE</h2>
            <p>Jobs So Far</p>
          </div>
          <a
            target="_blank"
            href={require('../../assets/WandersonCastroResume.pdf')}
            rel="noreferrer"
          >
            SEE RESUME
          </a>
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
            <li>
              <strong>Revamped: </strong>Transformed mockups into fully
              functional, custom websites using cutting-edge technologies.
            </li>
            <li>
              <strong>Engineered:</strong> Built and expertly tailored
              e-commerce platforms using Javascript, PHP, WordPress and Shopify,
              enhancing online business capabilities.
            </li>
            <li>
              <strong>Designed and Crafted:</strong> Produced engaging websites,
              meticulously crafted using HTML, CSS, and JavaScript to captivate
              user attention, always following the best UI/UX principals.
            </li>
            <li>
              <strong>Collaborated: </strong>Collaborated closely with Software
              Developers, contributing to PERFEX system adjustments using PHP
              and JavaScript.
            </li>
            <li>
              <strong>Ensured Robustness:</strong> Executed comprehensive tests
              and meticulously integrated security measures into web pages.
            </li>
            <li>
              <strong>Implemented Security Measures:</strong> Orchestrated the
              setup of DNS servers and SSL certificates, fortifying secure
              communication channels.
            </li>
            <li>
              <strong>Technological Stacks:</strong> HTML5, CSS, JavaScript,
              PHP, MySQL, WordPress, Shopify, DNS, SSL.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
          <p className="company-name">Diluceo</p>
          <p className="position">Web Developer - On Call</p>
          <p className="work-date">06/2021 – Now</p>
        </div>
        <div>
          <ul>
            <li>
              <strong>Engineered Responsive Solutions:</strong> Developed custom
              code, skillfully tailored to create responsive websites, adhering
              to design mockups.
            </li>
            <li>
              <strong>Sustained and Enhanced:</strong> Conducted meticulous web
              maintenance and swift updates, ensuring seamless user experiences
              on existing pages.
            </li>
            <li>
              <strong>Stack Expertise:</strong> HTML5, CSS, JavaScript,
              Typescript, ReactJs, Shopify, PHP, WooCommerce, MongoDb, MySQL.
            </li>
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
            <li>
              <strong>Translated Vision into Reality:</strong> Translated design
              mockups into functional websites, crafting custom code to exact
              specifications.
            </li>
            <li>
              <strong>Continuous Enhancement:</strong> Maintained and updated
              web pages with precision, incorporating new features and
              improvements.
            </li>
            <li>
              <strong>Visual Excellence:</strong> Optimized content by
              skillfully blending graphics, databases, and animations to create
              visually compelling websites.
            </li>
            <li>
              <strong>Architectural Influence:</strong> Contributed valuable
              insights to websites' architecture, determining intricate
              technical requirements.
            </li>
            <li>
              <strong>Quality Assurance and Security:</strong> Rigorously tested
              and fortified web pages, assuring quality and implementing
              security protocols.
            </li>
            <li>
              <strong>Proficient Stacks:</strong> HTML5, CSS, PHP, MySQL,
              Wordpress, Shopify, Databases, DNS, SSL.
            </li>
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
            <li>
              Documentation of incidents and problems solved on Help Desk
              System.
            </li>
            <li>Data entry.</li>
            <li>Configure computers and networks.</li>
            <li>Oversee and support all IT problems in all sectors.</li>
            <li>
              {' '}
              Guarantee that knowledge bases and online docs are updated.
            </li>
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
            <li>
              Documentation of incidents and problems solved on Help Desk
              System.
            </li>
            <li>Data entry.</li>
            <li>Configure computers and networks.</li>
            <li>Assist IT support analysts in solving more complex issues.</li>
            <li> Tech support to client systems and office automation.</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
