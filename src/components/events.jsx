import React, { Component } from "react";
import CommonTabs from "../common/commonTabs";
import "../css/events.css";

import axios from "axios";

axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export default class Events extends Component {
  state = {
    events: [],
    
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8081/api/v1/event/get-events"
    );
    this.setState({ events: response.data.data });
  }
  
  
  render() {
    return (
      <div>
        <CommonTabs />
        <div className="content-section">
          <div className="event-welcome-grid">
            <div className="div-welcome-title">
              <span className="event-welcome-title">Find The</span>
              <br />
              <span>All Meetings & Workshops in one place</span>
            </div>
            <div className="welcome-image">
              <img
                className="welcome-img"
                src={require("../images/event-welcome.png")}
                alt="todo-icon"
              />
            </div>
          </div>
          <span className="event-title">Upcoming meetings & Workshops</span>
          <div className="div-event-body">
            {this.state.events.map(event => (
              <div  className="div-event">
                <div className="event-date">
      
                  <div className="event-month">{event.month}</div>
                  <div className="event-day">{event.day}</div>
                </div>
                <div className="div-event-image">
                  <img
                    className="event-img"
                    src={require("../images/event1.png")}
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
                <div className="event-join-btn">Join</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
