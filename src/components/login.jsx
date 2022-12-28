import React, { Component } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";

export default class Login extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email")
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(error);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };
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
            <form onSubmit={this.handleSubmit}>
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
                    value={this.state.account.email}
                    onChange={this.handleChange}
                    error={this.state.errors.email}
                    className="input-email"
                    placeholder="Enter your ousl email address"
                  />
                  <br />
                  {this.state.errors.email && (
                    <div className="div-alert ">{this.state.errors.email}</div>
                  )}
                  <br />
                  <span className="password">Password</span> <br />
                  <input
                    type="password"
                    name="password"
                    value={this.state.account.password}
                    onChange={this.handleChange}
                    error={this.state.errors.password}
                    className="input-password"
                    placeholder="Type your password"
                  />
                  <br />
                  {this.state.errors.password && ( 
                    <div className="div-alert">
                      {this.state.errors.password}
                    </div>
                  )} 
                  <br />
                </div>
                <Link to="#">
                  <button
                    className="login-btn register-login-btn"
                    disabled={this.validate()}
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
