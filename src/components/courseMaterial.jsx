import React, { Component } from "react";
import CommonTabs from "../common/commonTabs";
import "../css/courseMaterial.css";



export default class CourseMaterial extends Component {
  
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
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu3"
              >
                <span>Click me</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Overview
                </a>
                <a href="#" class="dropdown-item">
                  Modifiers
                </a>
                <a href="#" class="dropdown-item">
                  Grid
                </a>
                <a href="#" class="dropdown-item">
                  Form
                </a>
                <a href="#" class="dropdown-item">
                  Elements
                </a>
                <a href="#" class="dropdown-item">
                  Components
                </a>
                <a href="#" class="dropdown-item">
                  Layout
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
