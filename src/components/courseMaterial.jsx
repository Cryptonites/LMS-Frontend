import React, { Component } from "react";
import CommonTabs from "../common/commonTabs";
import "../css/courseMaterial.css";
import { Link } from "react-router-dom";

export default class CourseMaterial extends Component {
  state = {
    value: "",
  };
  options = [
    { label: "Fruit", value: "fruit" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <CommonTabs />
        <div className="content-section">
          <div className="event-welcome-grid cm-grid-color">
            <div className="div-welcome-title">
              <span className="event-welcome-title">Get The</span>
              <br />
              <span>All Course Materials & Class Recordings in one place</span>
            </div>
            <div className="welcome-image"> 
              <img
                className="notification-welcome-img welcome-img"
                src={require("../images/course-material-welcome-img.png")}
                alt="todo-icon"
              />
            </div>
          </div>
          <div className="course-materials-grid">
            <div className="div-dropdown">
              <nav aria-label="Main Navigation" className="nav">
                <ul>
                  <li class="dropdown">
                    <button
                      type="button"
                      class="dropdown__title"
                      aria-expanded="false"
                      aria-controls="sweets-dropdown"
                    >
                      Choose a Subject
                    </button>
                    <ul class="dropdown__menu" id="sweets-dropdown">
                      <li>
                        <Link to="/events">EEY4189 Software Design</Link>
                      </li>
                      <li>
                        <a href="#">EEX3373 </a>
                      </li>
                      <li>
                        <a href="#">Chocolate</a>
                      </li>
                      <li>
                        <a href="#">Bonbons</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="div-course-material-section">
              <div className="div-presentations-text-books">
                <div className="div-presentations">
                  <div className="material-title"> Presentations</div>
                  <div className="material-section">
                    <ul className="cm-list">
                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon"
                            src={require("../images/presentation.png")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">Day school - 01</span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>

                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon"
                            src={require("../images/presentation.png")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">Day school - 01</span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>

                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon"
                            src={require("../images/presentation.png")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">Day school - 01</span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>

                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon"
                            src={require("../images/presentation.png")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">Day school - 01</span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="div-text-books">
                  <div className="material-title">Text Books</div>
                  <div className="material-section">
                    <ul className="cm-list">
                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon book-icon"
                            src={require("../images/book-icon.gif")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">
                            Unit 1 - Session 1,2,3
                          </span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>
                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon book-icon"
                            src={require("../images/book-icon.gif")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">
                            Unit 2 - Session 4,5,6
                          </span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>
                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon book-icon"
                            src={require("../images/book-icon.gif")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">
                            Unit 3 - Session 7,8,9
                          </span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>

                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon book-icon"
                            src={require("../images/book-icon.gif")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">
                            Unit 4 - Session 10
                          </span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>

                      <li className="cm-row">
                        <div className="div-cm-icon">
                          <img
                            className="cm-icon book-icon"
                            src={require("../images/book-icon.gif")}
                            alt="course-material-icon"
                          />
                        </div>

                        <div className="div-text-content">
                          <span className="resource-name">
                            Unit 4 - Session 11,12
                          </span>
                        </div>
                        <div className="div-download">
                          <a
                            href="https://github.com/Nusri7"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="download-icon"
                              src={require("../images/download-icon.png")}
                              alt="arrow-icon"
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="div-recording-section">
                <div className="material-title">Recordings</div>
                <div className="div-recording">
                  <ul className="cm-list">
                    <li className="rec-row">
                      
                      <div className="div-cm-icon">
                        <img
                          className="cm-icon book-icon"
                          src={require("../images/book-icon.gif")}
                          alt="course-material-icon"
                        />
                      </div>

                      <div className="div-rec-content">
                        <span className="resource-name">
                          Unit 1 - Sessdfsion 1,2,3
                        </span>
                      </div>
                      <div className="div-download">
                        <a
                          href="https://github.com/Nusri7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="download-icon"
                            src={require("../images/download-icon.png")}
                            alt="arrow-icon"
                          />
                        </a>
                      </div>
                    </li>
                    <li className="rec-row">
                      <div className="div-cm-icon">
                        <img
                          className="cm-icon book-icon"
                          src={require("../images/book-icon.gif")}
                          alt="course-material-icon"
                        />
                      </div>

                      <div className="div-rec-content">
                        <span className="resource-name">
                          Unit 2 - Session 4,5,6fgfsssfgsf
                        </span>
                      </div>
                      <div className="div-download">
                        <a
                          href="https://github.com/Nusri7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="download-icon"
                            src={require("../images/download-icon.png")}
                            alt="arrow-icon"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
