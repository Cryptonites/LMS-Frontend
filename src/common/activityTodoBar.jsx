import React, { Component } from "react";
import "../css/activityTodoBar.css";
import axios from "axios";

export default class ActivityTodoBar extends Component {
  state = {
    submissions: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8081/api/v1/submission/get-submissions"
    );
    this.setState({ submissions: response.data.data });
  }
  render() {
    return (
      <div>
        <div className="activity-container">
          <div className="submission">
            <div className="submission-title">
              <span>Upcoming Submissions</span>
            </div>
            <div className="submission-body">
              <ul className="submission-list">
                {this.state.submissions.map((submission) => (
                  <li className="submission-row">
                    <div className="div-submission-icon">
                      <img
                        className="submission-icon"
                        src={require("../images/submission-icon-removebg-preview.png")}
                        alt="submission-icon"
                      />
                    </div>
                    <div className="div-submission-info">
                      <div className="div-text-content">
                        <span className="sub-detail-title">
                          {submission.title}
                        </span>
                        <span className="sub-detail-due-date">
                          {submission.description}
                        </span>
                      </div>
                      <div className="div-arrow">
                        <a
                          href="https://github.com/Nusri7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="arrow-icon"
                            src={require("../images/arrow-removebg-preview.png")}
                            alt="arrow-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="line-break" />
          <div className="todo">
            <div className="todo-title">
              <span>Daily Task</span>
            </div>
            <div className="todo-body">
              <ul className="todo-list">
                <li className="todo-row">
                  <div className="div-todo-icon">
                    <img
                      className="todo-icon"
                      src={require("../images/tik2.jpg")}
                      alt="todo-icon"
                    />
                  </div>
                  <div className="div-todo-info">
                    <div className="div-todo-content">
                      <span className="todo-detail-title">
                        Complete TMA 2.1 1st question
                      </span>
                    </div>
                  </div>
                </li>
                <li className="todo-row">
                  <div className="div-todo-icon">
                    <img
                      className="todo-icon"
                      src={require("../images/tik2.jpg")}
                      alt="todo-icon"
                    />
                  </div>
                  <div className="div-todo-info">
                    <div className="div-todo-content">
                      <span className="todo-detail-title">
                        147nusri@gmail.com
                      </span>
                    </div>
                  </div>
                </li>
                <li className="todo-row">
                  <div className="div-todo-icon">
                    <img
                      className="todo-icon"
                      src={require("../images/tik2.jpg")}
                      alt="todo-icon"
                    />
                  </div>
                  <div className="div-todo-info">
                    <div className="div-todo-content">
                      <span className="todo-detail-title">
                        Refer EEX3373 DS Presentation
                      </span>
                    </div>
                  </div>
                </li>
                <li className="todo-row">
                  <div className="div-todo-icon">
                    <img
                      className="todo-icon"
                      src={require("../images/tik2.jpg")}
                      alt="todo-icon"
                    />
                  </div>
                  <div className="div-todo-info">
                    <div className="div-todo-content">
                      <span className="todo-detail-title">
                        Start to design dashboard UI
                      </span>
                    </div>
                  </div>
                </li>
                <li className="todo-row">
                  <div className="div-todo-icon">
                    <img
                      className="todo-icon"
                      src={require("../images/tik2.jpg")}
                      alt="todo-icon"
                    />
                  </div>
                  <div className="div-todo-info">
                    <div className="div-todo-content">
                      <span className="todo-detail-title">
                        Eat on time. sleep well ✌️😊
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="div-coding-image">
            <img
              className="coding-image"
              src={require("../images/studying.jpg")}
              alt="todo-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}
