import React, { Component } from "react";
import "../css/titleBar.css";

export default class TitleBar extends Component {
  state = {
    currentUserName: localStorage.getItem('User'),
  };
  render() {
    return (
      <div>
        <div className="title-container">
          <div className="title-name">
            <span className="tab-title is-size-5 ">Dashboard</span>
            <br />
            <span className="welcome-title is-7">
              Hi {this.state.currentUserName}, Welcome To Cryptonites Dashboard
            </span>
          </div> 
          <div className="msg-notify-icon">
            <i className="fa fa-comment fa-lg notify-icn"></i>
            <i className="fa fa-bell fa-lg"></i>
          </div>
          <div className="profile-details">
            <div className="logo">
              <img
                className="profile-img"
                src={require("../images/new.jpeg")}
                alt="profile-pic"
              />
            </div>
            <div className="profile-name">
              <span className="user-name">M.A.A Nusri</span>
              <br />
              <span className="user-sid">S92070475</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
