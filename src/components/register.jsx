import React, { Component } from "react";
import "../css/register.css";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";

export default class Login extends Component {
  state = {
    account: { email: "", name: "", password: "", repeat_password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email")
      .email({ minDomainSegments: 2, tlds: { allow: ["lk"] } }),
    name: Joi.string().required().label("Name"),
    password: Joi.string().required().label("Password"),
    repeat_password: Joi.string().required().label("password"),
  };

  handleAdd = async () => {
    const obj = {
      name: this.state.account.name,
      email: this.state.account.email,
      password: this.state.account.password,
    };
    const response = await axios.post(
      "http://localhost:8081/api/v1/user/add-user",
      obj
    );
    const accounts = [response.data.data, ...this.state.account];
    this.setState({ accounts });
    console.log(response.data.data);
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

  handleSubmit = () => {
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.handleAdd();
    this.handleNavigate();

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
  handleNavigate() {
    if(true){
      return "/"
    }
  }
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
            <form>
              <div className="div-login-register">
                <div className="div-login-register-heading ">Register</div>
                <div className="div-input-section ">
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
                  <span className="Email">Your Name</span>
                  <br />
                  <input
                    id="Email"
                    type="text"
                    name="name"
                    value={this.state.account.name}
                    onChange={this.handleChange}
                    error={this.state.errors.name}
                    className="input-email"
                    placeholder="Enter your last Name"
                  />
                  <br />
                  {this.state.errors.name && (
                    <div className="div-alert ">{this.state.errors.name}</div>
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
                  <span className="password">Confirm Password</span> <br />
                  <input
                    type="password"
                    name="repeat_password"
                    value={this.state.account.repeat_password}
                    onChange={this.handleChange}
                    error={this.state.errors.repeat_password}
                    className="input-password"
                    placeholder="Type your password"
                  />
                  <br />
                  {this.state.errors.repeat_password && (
                    <div className="div-alert">
                      {this.state.errors.repeat_password}
                    </div>
                  )}
                  <br />
                </div>
                <Link to={() =>this.handleNavigate()}>
                  <button
                    className="register-login-btn"
                    onClick={() => this.handleSubmit()}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
