import React, { Component } from "react";
import CommonTabs from "../common/commonTabs";
import "../css/notification.css";

import axios from "axios";

axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export default class Notification extends Component {
  state = {
    notifications: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8081/api/v1/notification/get-notifications"
    );
    this.setState({ notifications: response.data.data });
    console.log(this.state.notifications);
  }
  render() {
    return (
      <div>
        <CommonTabs />
        <div className="content-section">
          <div className="event-welcome-grid grid-color">
            <div className="div-welcome-title">
              <span className="event-welcome-title">Find The</span>
              <br />
              <span>All Notifications & Messages in one place</span>
            </div>
            <div className="welcome-image">
              <img
                className="notification-welcome-img welcome-img"
                src={require("../images/notification_messages.png")}
                alt="todo-icon"
              />
            </div>
          </div>
          <span className="event-title">You have new unseen notifications</span>
          <div className="div-notification-body">
            {this.state.notifications.map((notification) => (
              <div key={notification.notificationId} className="div-notification-alter div-notification">
                <div className="notification-title-section">
                  <div className="div-notifier-img">
                    <img
                      className="notifier-img"
                      src={require("../images/Cordinators/nalin sir (1).jpg")}
                      alt="ds-title-img"
                    />
                  </div>
                  <div className="div-notifier-name notifier-name">
                    {notification.senderName}
                  </div>
                </div>
                <hr className="line-brak-notification" />
                <div className="div-notification-body-section-alter div-notification-body-section">
                  {notification.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
