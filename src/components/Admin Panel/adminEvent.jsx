import React, { Component } from "react";
import TitleBar from "./../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/adminEvent.css";

import axios from "axios";

export default class AdminEvent extends Component {
  state = {
    events: [],
    mainTitle: "",
    subTitle: "",
    description: "",
    startTime: "",
    endTime: "",
    month: "",
    day: "",
    eventLink: "",
  };

  updateInputValue(evt, field) {
    this.setState({ [field]: evt.target.value });
    
  }

  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:8081/api/v1/event/get-events`
    );
    this.setState({ events: response.data.data });
  }
  async componentDidUpdate() {}
  handleAdd = async (e) => {
    console.log(this.state.inputValue);
    const obj = {
      mainTitle: this.state.mainTitle,
      subTitle: this.state.subTitle,
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      month: this.state.month,
      day: this.state.day,
      eventLink: this.state.eventLink,
    };
    const response = await axios.post(
      "http://localhost:8081/api/v1/event/add-event",
      obj
    );
    const events = [response.data.data, ...this.state.events];
    this.setState({ events });
    
  };
  handleDelete = async (event) => {
    const events = this.state.events.filter((p) => p.id !== event.eventId);
    this.setState({ events });
    console.log(event.eventId + "   " + event);
    await axios.delete(
      `http://localhost:8081/api/v1/todo/delete-todo/${event.eventId}`
    );
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
                <div className="div-event-name">Enter the Meeting Title </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Event Name"
                    value={this.state.mainTitle}
                    onChange={(evt) => this.updateInputValue(evt, "mainTitle")}
                  />
                </div>
              </div>
              <div>
                <div className="div-event-name">
                  Enter the event Sub Heading{" "}
                </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message" 
                    placeholder="Sub Heading"
                    value={this.state.subTitle}
                    onChange={(evt) => this.updateInputValue(evt, "subTitle")}
                  />
                </div>
              </div>
            </div>
            <div className="div-countdown-date-input">
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

              <div>
                <div className="div-event-name">Start Time </div>
                <div className="add-todo-input">
                  <input
                    className="countdown-input input-todo"
                    type="text"
                    name="message"
                    placeholder="6.00 p.m"
                    value={this.state.startTime}
                    onChange={(evt) => this.updateInputValue(evt, "startTime")}
                  />
                </div>
              </div>

              <div>
                <div className="div-event-name">End Time </div>
                <div className="add-todo-input">
                  <input
                    className="countdown-input input-todo"
                    type="text"
                    name="message"
                    placeholder="8.30 p.m"
                    value={this.state.endTime}
                    onChange={(evt) => this.updateInputValue(evt, "endTime")}
                  />
                </div>
              </div>
            </div>
            <div className="div-countdown-date-input">
              <div>
                <div className="div-event-name">Meeting Description </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="Say what want to refer"
                    value={this.state.description}
                    onChange={(evt) =>
                      this.updateInputValue(evt, "description")
                    }
                  />
                </div>
              </div>

              <div>
                <div className="div-event-name">Meeting Link </div>
                <div className="add-todo-input">
                  <input
                    className="event-input input-todo"
                    type="text"
                    name="message"
                    placeholder="zoom link"
                    value={this.state.eventLink}
                    onChange={(evt) => this.updateInputValue(evt, "eventLink")}
                  />
                </div>
              </div>
            </div>
            <div
              className="div-btn-update-countdown"
              onClick={() => this.handleAdd()}
            >
              Add Event
            </div>
          </div>
          <span className="admin-event-title event-title">
            Upcoming meetings & Workshops
          </span>
          <div className="div-admin-event-body div-event-body">
            {this.state.events.map((event) => (
              <div className="div-event">
                <div className="event-date">
                  <div className="event-month">{event.month}</div>
                  <div className="event-day">{event.day}</div>
                </div>
                <div className="div-event-image">
                  <img
                    className="event-img"
                    src={require("../../images/event1.png")}
                    alt="todo-icon"
                  />
                </div>
                <div className="event-details">
                  <span className="event-title-description">
                    {event.mainTitle}
                  </span>
                  <span className="event-sub-title">{event.subTitle}</span>
                  <span className="event-refer">{event.description}</span>
                  <span className="event-time">
                    Time - {event.startTime} - {event.endTime}
                  </span>
                </div>
                <div className="event-join-btn" onClick={() => this.handleDelete()}>Remove</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
