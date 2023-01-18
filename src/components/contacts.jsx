import React, { Component } from "react";
import NavigationTab from "../common/navigationTab";
import TitleBar from "../common/titleBar";
import "../css/contacts.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/fontawesome-free-solid";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-container">
        <TitleBar />
        <NavigationTab />
        
        <div className="contact-content content-section">
          <div class="image-bg"></div>
          <div className="contact-section"> 
            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Ajith Sir.png")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Dr Ajith Madurapperuma</span>
                <br />
                <span className="person-position">Vice-Chancellor</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> apmad@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 0112 881 481
              </div>

              <a
                href="https://www.linkedin.com/in/ajith-madurapperuma-2031354/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/uditha madam (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Prof Uditha Ratnayake</span>
                <br />
                <span className="person-position">Senior Lecturer </span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> udithaw@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 0112 881 469
              </div>

              <a
                href="https://www.linkedin.com/in/uditha-ratnayake/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Lahiru-Fernando (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. Lahiru Fernando</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> wafer@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/lahiru-p-fernando/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/savithree madam (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms. Savithree Senanayake</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> hrsen@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/savithree-senanayake-47197a127/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div> 

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Kasun-Aratthanage (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. Kasun Aratthanage</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> kdara@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/kasun-aratthanage/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Ahalikai-Suthaharan (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms. Ahalikai Suthaharan</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> asuth@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/ahalikai-suthaharan-96975560/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/A Dantharanayake Sir.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. A.N Danthanarayana</span>
                <br />
                <span className="person-position">Academic Coordinator</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> ashannisansala@gmail.com
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1287
              </div>

              <a
                href="##"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Dabare Madam.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Dr. P.T.R. Dabare</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> ptdab@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://ou.ac.lk/mrs-p-t-r-dabare/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Amila-B-Gunarathne (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. Amila B Gunarathne</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> kaagu@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/amilabgunarathne/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images//Cordinators/Shafka Miss.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms. M.F.F. Shafka</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> mfsha@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1287
              </div>

              <a
                href="##"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>
            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Saliya Sir.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. Saliya Wickramasinghe</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> bmwic@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/saliya-wickramasinghe-2b0636b8/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Hasanthi-Abeysinghe (1).jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms. Hasanthi Abeysinghe</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> nhabe@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="##"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Nilanga Sir.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. N.I. Vithanage</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> nivit@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="##"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>

            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Piumi-Gamage.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms. Piumi Gamage</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> pwgam@ousl.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/piumi-gamage-1a858b14b/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div>
            <div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Kushani-Bandara.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Ms Kushani Bandara</span>
                <br />
                <span className="person-position">Lecturer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> gbban@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/kushani-bandara/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin{" "}
                </div>
              </a>
            </div><div className="contact-grid">
              <img
                className="contact-person-img"
                src={require("../images/Cordinators/Indrajith-Ekanayake.jpg")}
                alt=""
              />
              <div className="div-person-title">
                <span className="person-name">Mr. Indrajith Ekanayake</span>
                <br />
                <span className="person-position">Lecturer | Technical Trainer</span>
              </div>
              <div className="div-email">
                <FontAwesomeIcon icon={faEnvelope} /> emiek@ou.ac.lk
              </div>
              <div className="div-phone-number">
                <FontAwesomeIcon icon={faPhone} /> 011 288 1000
              </div>

              <a
                href="https://www.linkedin.com/in/indrajithek/?originalSubdomain=lk"
                target="_blank"
                rel="noreferrer"
              >
                <div className="linkedin">
                  <i class="fa fa-linkedin-square"></i> Linkedin
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
