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
            href={require('../../assets/WandersonCastroResumePdf.pdf')}
            rel="noreferrer"
          >
            SEE RESUME
          </a>
        </div>
      </div>
      <div className="experience-wrapper">
        <div>
          <p className="company-name">General Internet</p>
          <p className="position">Full-Stack Front End Developer</p>
          <p className="work-date">11/2021 – Now</p>
        </div>
        <div>
          <ul>
            <li>
              Architected and engineered web applications from the ground up
              using JavaScript and ReactJS, with a strong emphasis on
              performance and scalability. Meticulously crafted interfaces to
              adhere to top-tier UI/UX principles, ensuring a seamless and
              intuitive user experience throughout the application lifecycle.
            </li>
            <li>
              Engineered robust e-commerce platforms using JavaScript, PHP,
              WordPress, Webflow, and Shopify, significantly enhancing online
              business capabilities. Implemented performance optimizations,
              resulting in increased website visits and customer interactions.
            </li>
            <li>
              Executed thorough testing procedures and integrated robust
              security measures into web pages, ensuring a secure online
              environment for users. Implemented continuous integration and
              deployment (CI/CD) pipelines for streamlined development and
              consistent updates.
            </li>
            <li>
              Orchestrated the setup of DNS servers and SSL certificates,
              fortifying secure communication channels. Leveraged server-side
              rendering with Next.js to efficiently call and integrate with
              external APIs, enhancing performance and functionality.
            </li>
            <li>
              Utilized TypeScript to develop scalable and maintainable
              codebases, ensuring code quality and reducing potential errors.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
          <p className="company-name">Diluceo</p>
          <p className="position">Front End Developer</p>
          <p className="work-date">06/2021 – Now</p>
        </div>
        <div>
          <ul>
            <li>
              Translated design mockups into fully functional websites using a
              comprehensive stack of technologies, including HTML, CSS,
              Bootstrap, JavaScript, PHP, React, and NextJs. Crafted custom code
              with precision to exact specifications.
            </li>
            <li>
              Engineered and customized highly tailored e-commerce platforms
              using JavaScript, PHP, WordPress, Webflow, and Shopify.
              Significantly enhanced online business capabilities, resulting in
              improved customer interactions and business growth.
            </li>
            <li>
              Conducted meticulous web maintenance and swift updates, ensuring
              seamless user experiences on existing pages. Implemented updates
              promptly to keep pace with evolving user expectations.
            </li>
            <li>
              Produced compelling web applications, meticulously crafted using
              HTML, CSS, and JavaScript, with a special focus on ReactJs and
              NextJs. Captivated user attention and consistently adhered to the
              best UI/UX principles for optimal user satisfaction.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div>
          <p className="company-name">Flinnwest Solutions Inc. </p>
          <p className="position">Front End Developer</p>
          <p className="work-date">08/2020 – 11/2021</p>
        </div>
        <div>
          <ul>
            <li>
              Translated design mockups into functional websites using a stack
              of technologies including HTML, CSS, Bootstrap, JavaScript, PHP,
              and React, crafting custom code to exact specifications.
            </li>
            <li>
              Maintained and updated web pages with precision, incorporating new
              features and improvements.
            </li>
            <li>
              Optimized content by skillfully blending graphics, databases, and
              animations using HTML, CSS, Bootstrap, JavaScript, and React,
              creating visually compelling websites.
            </li>
            <li>
              Contributed valuable insights to websites' architecture,
              determining intricate technical requirements for projects that
              included WordPress, Webflow, and Shopify.
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
