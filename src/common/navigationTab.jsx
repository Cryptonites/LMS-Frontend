import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBookOpen,
  faClipboardCheck,
  faEnvelope,
  faTable,
} from "@fortawesome/fontawesome-free-solid";
import "../css/navigationTab.css";
import {
  faCommentAlt,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const NavigationTab = () => {
  return (
    <div>
      <div className="container-lms">
        <div className="brand">
          <div className="logo">
            <img
              className="logo-img"
              src="https://img.freepik.com/premium-vector/flat-web-template-with-lms-concept-design-concept-learning-management-system_100456-8728.jpg"
              alt="lms-logo"
            />
          </div>
          <div className="name">
            <span className="title is-size-5 ">Cryptonites</span>
            <br />
            <span className="subtitle is-7">Learning Management System</span>
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="navigate">
          <h2 className="title-menu">Main Menu</h2>
          <nav>
            <Link to="/dashboard">
              <div className="nav-section active-tab">
                <div className="icon">
                  <FontAwesomeIcon icon={faTable} />
                </div>
                <div className="tab">Dashboard</div>
              </div>
            </Link>
            <div className="nav-hover">
              <Link to="/events">
                <div className="nav-section ">
                  <div className="icon">
                    <i
                      className="fa fa-calendar-check-o"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="tab">Events</div>
                </div>
              </Link>
            </div>
            <div className="nav-hover">
              <Link to="/notification">
                <div className="nav-section">
                  <div className="icon">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </div>
                  <div className="tab">Notification</div>
                </div>
              </Link>
            </div>
            <div className="nav-hover">
              <Link to="/courseMaterial">
                <div className="nav-section">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <div className="tab">Course Material</div>
                </div>
              </Link>
            </div>
            <div className="nav-hover">
              <Link to="/todo">
                <div className="nav-section">
                  <div className="icon">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                  </div>
                  <div className="tab">Tasks</div>
                </div>
              </Link>
            </div>
            <div className="nav-hover">
              <Link to="/contacts">
                <div className="nav-section">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="tab">Contact Details</div>
                </div>
              </Link>
            </div>
            <div className="nav-hover">
              <div className="nav-section">
                <div className="icon">
                  <FontAwesomeIcon icon={faCommentAlt} />
                </div>
                <div className="tab">Forum</div>
              </div>
            </div>
          </nav>
        </div>
        <div className="navigate-footer">
          <span className="copyright">
            Ⓒ Copyright To Team Cryptonites <br />
            2022
          </span>
          <hr />
          <div className="logout">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            <div className="logout-name">Log Out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTab;
