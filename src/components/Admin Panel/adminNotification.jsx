import React, { Component } from "react";
import TitleBar from "../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/adminNotification.css";
import axios from "axios";

export default class AdminNotification extends Component {
  state = {
    notifications: [],
    senderName: "",
    message: "",
    senderImagePath: "",
  };

  updateInputValue(evt, field) {
    this.setState({ [field]: evt.target.value });
  }

  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:8081/api/v1/notification/get-notifications`
    );
    this.setState({ events: response.data.data });
  }
  async componentDidUpdate() {}
  handleAdd = async () => {
    console.log(this.state.inputValue);
    const obj = {
      senderName: this.state.senderName,
      message: this.state.message,
      senderImagePath: this.state.senderImagePath,
    };
    const response = await axios.post(
      "http://localhost:8081/api/v1/notification/add-notification",
      obj
    );
    const events = [response.data.data, ...this.state.events];
    this.setState({ events });
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
                  Enter the name of the Notifier{" "}
                </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Notifier Name"
                    value={this.state.senderName}
                    onChange={(evt) => this.updateInputValue(evt, "senderName")}
                  />
                </div>
              </div>
              <div>
                <div className="div-event-name">
                  Select the avatar for the Notifier
                </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Image Path"
                    value={this.state.senderImagePath}
                    onChange={(evt) =>
                      this.updateInputValue(evt, "senderImagePath")
                    }
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="div-event-name">Enter the Message </div>
              <div className="add-todo-input">
                <textarea
                  className="notification-input input-todo"
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={(evt) => this.updateInputValue(evt, "message")} 
                />
              </div>
            </div>
            <div
              className="div-btn-update-countdown"
              onClick={() => this.handleAdd()}
            >
              Add Notification
            </div>
          </div>
        </div>
      </div>
    );
  }
}
