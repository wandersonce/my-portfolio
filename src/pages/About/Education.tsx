import React from 'react'

import udemyLogo from '../../assets/udemyLogo.png';

function Education() {
  return (
    <div className="education-wrapper">
            <div className="title-wrapper">
              <h2>EDUCATION</h2>
              <p className="subtitle-header"> Learning</p>
              </div>

              <div className="education-items-wrapper">
                <div className="edu-left">
                    <div></div>
                    <div></div>
                </div>
                <div className="edu-right">
                  <div>2016</div>
                  <div>
                   <p>Business Administration</p>
                   <p>University of Fortaleza</p>
                   <p>Bachelor</p>
                  </div>
                </div>

                <div className="edu-left">
                  <div>
                   <p>Business Administration</p>
                   <p>University of Fortaleza</p>
                   <p>Bachelor (Not-Completed)</p>
                  </div>
                <div>2017</div>
                </div>
                <div className="edu-right">
                <div></div>
                <div></div>
                </div>

                <div className="edu-left">
                    <div></div>
                    <div></div>
                </div>
                <div className="edu-right">
                  <div>2019</div>
                  <div>
                   <p> Applied Web Development</p>
                   <p>British Columbia Institute of Technology (BCIT)|</p>
                   <p>Certificate</p>
                  </div>
                </div>
              </div>

              <h3>LICENSES & CERTIFICATIONS</h3>
              <div className="licensesWrapper">
              <div className="licCert-wrapper">
                <div>
                  <img src={udemyLogo} alt="udemy logo"/>
                </div>
                <div>
                  <p>Web Development 2018</p>
                  <p>Udemy</p>
                  <p>Issued May 2019</p>
                </div>
              </div>

              <div className="licCert-wrapper">
                <div>
                <img src={udemyLogo} alt="udemy logo"/>
                </div>
                <div>
                  <p>Modern Web With JavaScript 2019</p>
                  <p>Udemy</p>
                  <p>Issued Jun 2019</p>
                </div>
              </div>

              <div className="licCert-wrapper">
                <div>
                <img src={udemyLogo} alt="udemy logo"/>
                </div>
                <div>
                  <p>Wordpress for developers</p>
                  <p>Udemy</p>
                  <p>Issued Oct 2019</p>
                </div>
              </div>

              <div className="licCert-wrapper">
                <div>
                <img src={udemyLogo} alt="udemy logo"/>
                </div>
                <div>
                  <p>React Native - Develop apps for android and Ios</p>
                  <p>Udemy</p>
                  <p>Issued Dec 2019</p>
                </div>
              </div>
              
              </div>
    </div>
  )
}

export default Education