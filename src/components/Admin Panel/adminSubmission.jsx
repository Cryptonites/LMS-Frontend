import React, { Component } from "react";
import TitleBar from "./../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/adminSubmission.css";

import axios from "axios";

export default class AdminSubmission extends Component {
  state = {
    submissions: [],
    title: "",
    description: "",
    submissionLink: "",
  };

  updateInputValue(evt, field) {
    this.setState({ [field]: evt.target.value });
  }

  async componentDidMount() {}

  handleAdd = async () => {
    
    const obj = {
      
      title: this.state.title,
      description: this.state.description,
      submissionLink: this.state.submissionLink,
    };
    const response = await axios.post(
      "http://localhost:8081/api/v1/submission/add-submission",
      obj
    );
    const submissions = [response.data.data, ...this.state.submissions];
    this.setState({ submissions });
  };
  render() {
    return (
      <div>
        <TitleBar />
        <AdminNavigationTab />
        <div className="admin-section">
          <div className="div-event-change-section div-change-countdown-section">
            <div className="div-countdown-date-input">
              <div>
                <div className="div-event-name">
                  Enter the Submission Title{" "}
                </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Notifier Name"
                    value={this.state.title}
                    onChange={(evt) => this.updateInputValue(evt, "title")}
                  />
                </div>
              </div>
              <div>
                <div className="div-event-name">Enter Due Date</div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Due 31.02.2023 11.59 p.m "
                    value={this.state.description}
                    onChange={(evt) =>
                      this.updateInputValue(evt, "description")
                    }
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="div-event-name">Enter the Submission link </div>
              <div className="add-todo-input">
                <textarea
                  className="notification-input input-todo"
                  type="text"
                  name="message"
                  placeholder="Submission link"
                  value={this.state.submissionLink}
                  onChange={(evt) =>
                    this.updateInputValue(evt, "submissionLink")
                  }
                />
              </div>
            </div>
            <div
              className="div-btn-update-countdown"
              onClick={() => this.handleAdd()}
            >
              Add Submission
            </div>
          </div>
        </div>
      </div>
    );
  }
}
