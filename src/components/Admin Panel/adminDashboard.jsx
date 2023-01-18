import React, { Component } from "react";
import TitleBar from "../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/adminDashboard.css";
import { Link } from "react-router-dom";

import axios from "axios";

export default class AdminDashboard extends Component {
  state = {
    activeUsers: 0,
    pendingUsers: 0,
    eventName: "",
    year: "",
    month: "",
    day: "",
  };

  updateInputValue(evt, field) {
    this.setState({ [field]: evt.target.value });
  }
  async componentDidMount() {
    const response1 = await axios.get(
      "http://localhost:8081/api/v1/user/get-state-by-opinion/active"
    );
    const response2 = await axios.get(
      "http://localhost:8081/api/v1/user/get-state-by-opinion/inactive"
    );
    this.setState({ 
      activeUsers: response1.data.data.length,
      pendingUsers: response2.data.data.length,
    });
  }

  handleCountdown = async (id) => {
    const response = await axios.put(
      `http://localhost:8081/api/v1/countdown/update-count-down`,
      {
        countdownId: id,
        eventName: this.state.eventName,
        day: this.state.day, 
        month: this.state.month,
        year: this.state.year,
      }
    );
  };
  render() {
    return (
      <div>
        <TitleBar />
        <AdminNavigationTab />
        <div className="dashboard-section">
          <div className="div-user-state-info">
            <div className="div-user-state div-active-users">
              <Link to={"/activeUsers"}>
                <div className="div-state-heading">Activated Users</div>
                <div className="div-state-img">
                  <img
                    className="state-icon"
                    src={require("../../images/Admin/activeUser1.png")}
                    alt="state-icon"
                  />
                </div>
                <div className="div-state-number">{this.state.activeUsers}</div>
              </Link>
            </div>
            <div className="div-user-state div-pending-users">
              <Link to={"/pendingUsers"}>
                <div className="div-state-heading">Pending Users</div>
                <div className="div-state-img">
                  <img
                    className="state-icon"
                    src={require("../../images/Admin/pendingIcon1.png")}
                    alt="state-icon"
                  />
                </div>
                <div className="div-state-number">
                  {this.state.pendingUsers}
                </div>
              </Link>
            </div>
            <div className="div-user-state div-active-admins">
              <Link to={"/totalAdmins"}>
                <div className="div-state-heading">Total Admins</div>
                <div className="div-state-img">
                  <img
                    className="state-icon"
                    src={require("../../images/Admin/adminIcon2.jpg")}
                    alt="state-icon"
                  />
                </div>
                <div className="div-state-number">5</div>
              </Link>
            </div>
          </div>
          <div className="div-change-countdown-title">
            Change Countdown Time
          </div>
          <div className="div-change-countdown-section">
            <div className="div-event-name">Enter the event name </div>
            <div className="add-todo-input">
              <input
                className="countdown-event-input input-todo"
                type="text"
                name="message"
                placeholder="Enter a Event"
                value={this.state.eventName}
                onChange={(evt) => this.updateInputValue(evt, "eventName")}
              />
            </div>
            <div className="div-countdown-date-input">
              <div>
                <div className="div-event-name">Year </div>
                <div className="add-todo-input">
                  <input
                    className="countdown-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Year"
                    value={this.state.year}
                    onChange={(evt) => this.updateInputValue(evt, "year")}
                  />
                </div>
              </div>

              <div>
                <div className="div-event-name">Month </div>
                <div className=" add-todo-input">
                  <input
                    className="countdown-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Month"
                    value={this.state.month}
                    onChange={(evt) => this.updateInputValue(evt, "month")}
                  />
                </div>
              </div>

              <div>
                <div className="div-event-name">Day</div>
                <div className="add-todo-input">
                  <input
                    className="countdown-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Day"
                    value={this.state.day}
                    onChange={(evt) => this.updateInputValue(evt, "day")}
                  />
                </div>
              </div>
            </div>
            <div
              className="div-btn-update-countdown"
              onClick={() => this.handleCountdown(1)}
            >
              Update
            </div>
          </div>
        </div>
      </div>
    );
  }
}
