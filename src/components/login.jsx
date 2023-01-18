import React, { Component } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";


export default class Login extends Component {
  
  render() {
    return (
      <div className="div-container">
        <div className="div-left">
          <div className="div-image-section">
            <img
              className="register-log-image"
              src={require("../images/LMS2.png")}
              alt="ds-title-img"
            />
          </div>
        </div>
        <div className="div-right">
          <div className="div-log-register-section">
            <form onSubmit={this.props.onHandleSubmit}>
              <div className="div-login-register">
                <div className="div-login-register-heading div-login-heading">
                  Login
                </div>
                <div className="div-input-section div-login-input">
                  <span className="Email">University email address</span>
                  <br />
                  <input
                    id="Email"
                    type="email"
                    name="email"
                    value={this.props.account.email}
                    onChange={this.props.onHandleChange}
                    error={this.props.errors.email}
                    className="input-email"
                    placeholder="Enter your ousl email address"
                  />
                  <br />
                  {this.props.errors.email && (
                    <div className="div-alert ">{this.props.errors.email}</div>
                  )}
                  <br />
                  <span className="password">Password</span> <br />
                  <input
                    type="password"
                    name="password"
                    value={this.props.account.password}
                    onChange={this.props.onHandleChange}
                    error={this.props.errors.password}
                    className="input-password"
                    placeholder="Type your password"
                  />
                  <br />
                  {this.props.errors.password && (
                    <div className="div-alert">
                      {this.props.errors.password}
                    </div>
                  )}
                  <br />
                </div>
                <Link to={this.props.onHandleNavigate()}>
                  <button
                    className="login-btn register-login-btn"
                    type="submit"
                    value="Submit"
                    onClick={this.props.onValidate}
                  >
                    Login
                  </button>
                </Link>

                <div className="div-forget-password">
                  <Link to="#">Forgotten Password </Link> <br />
                  <Link to="/register">Create an Account </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
