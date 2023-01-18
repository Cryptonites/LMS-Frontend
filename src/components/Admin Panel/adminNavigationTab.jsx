import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  faBookOpen,
  faClipboardCheck,
  faCloudDownloadAlt,
  faEnvelope,
  faPaperPlane,
  faTable,
} from "@fortawesome/fontawesome-free-solid";
import "../../css/navigationTab.css";
import {
  faCommentAlt,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AdminNavigationTab = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [navigations, setNavigations] = useState([
    {
      name: "Dashboard",
      link: "/admin",
      icon: <FontAwesomeIcon icon={faTable} />,
    },

    { 
      name: "Events",
      link: "/adminEvent",
      icon: <i className="fa fa-calendar-check-o" aria-hidden="true"></i>,
    },
    {
      name: "Notifications",
      link: "/adminNotification",
      icon: <i className="fa fa-bell" aria-hidden="true"></i>,
    },
    {
      name: "Course Material",
      link: "/courseMaterial",
      icon: <FontAwesomeIcon icon={faBookOpen} />,
    },
    { 
      name: "Submissions",
      link: "/adminSubmission",
      icon: <FontAwesomeIcon icon={faPaperPlane} />,
    },
  ]);

  const handleTab = (tab) => {
    setCurrentTab(tab);
    console.log(currentTab);
  };
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
            {navigations.map((navigate) => (
              <Link to={navigate.link}>
                <div
                  className={
                    navigate.name === currentTab
                      ? " active-tab nav-section nav-hover"
                      : " nav-section nav-hover"
                  }
                  onClick={() => handleTab(navigate.name)}
                >
                  <div className="icon">{navigate.icon}</div>
                  <div className="tab">{navigate.name}</div>
                </div>
              </Link>
            ))}
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

export default AdminNavigationTab;
