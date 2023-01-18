import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./components/dashboard";
import Events from "./components/events";
import Notification from "./components/notification";
import Contacts from "./components/contacts";

import React, { Component } from "react";
import Countdown from "./common/countdown";
import Todo from "./components/todo";
import Login from "./components/login";
import Register from "./components/register";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import CourseMaterial from "./components/courseMaterial";

import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import AdminDashboard from "./components/Admin Panel/adminDashboard";
import ActiveUsers from './components/Admin Panel/activeUsers';
import PendingUsers from './components/Admin Panel/pendingUsers';
import TotalAdmins from './components/Admin Panel/totalAdmins';
import AdminEvent from './components/Admin Panel/adminEvent';
import AdminNotification from './components/Admin Panel/adminNotification';
import AdminSubmission from './components/Admin Panel/adminSubmission';

export default class App extends Component {
  state = {
    account: { email: "", password: "" },
    registered: "",
    user: {},
    userDetails: "",
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email")
      .email({ minDomainSegments: 2, tlds: { allow: ["lk"] } }),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    this.doSubmit();
    this.handleLogin();
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

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
  componentDidUpdate = () => {
    this.doSubmit();
    localStorage.setItem("User", JSON.stringify(this.state.user.name));
  };
  doSubmit = async () => {
    const response = await axios.get(
      `http://localhost:8081/api/v1/user/get-user-by-id-password?email=${this.state.account.email}&pwd=${this.state.account.password}`
    );
    const getUser = await axios.get(
      `http://localhost:8081/api/v1/user/get-user-by-email?email=${this.state.account.email}`
    );

    const userDetails = localStorage.getItem("User");
    this.setState({ registered: response.data.data, user: getUser.data.data });
  };
  handleNavigate = () => {
    if (this.state.registered === "found") {
      return "/dashboard";
    } else {
      return "/";
    }
  };
  handleLogin = () => {
    if (this.state.registered === "found") {
      return toast.success("Successfully Logged in");
    } else {
      return toast.error("Username and Password does not matched!!!");
    }
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  onHandleSubmit={this.handleSubmit}
                  account={this.state.account}
                  errors={this.state.errors}
                  onHandleChange={this.handleChange}
                  onHandleNavigate={() => this.handleNavigate()}
                  onValidate={this.validate}
                />
              }
            />
            <Route path="register" element={<Register />} />
            <Route
              path="dashboard"
              element={<Dashboard user={this.state.userDetails} />}
            />
            <Route path="events" element={<Events />} />
            <Route path="notification" element={<Notification />} />
            <Route path="courseMaterial" element={<CourseMaterial />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="todo" element={<Todo />} />
            <Route path="activeUsers" element={<ActiveUsers />} />
            <Route path="pendingUsers" element={<PendingUsers />} />
            <Route path="totalAdmins" element={<TotalAdmins />} />
            <Route path="adminEvent" element={<AdminEvent />} />
            <Route path="adminNotification" element={<AdminNotification />} />
            <Route path="adminSubmission" element={<AdminSubmission />} />
            <Route
              path="admin"
              element={<AdminDashboard user={this.state.userDetails} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
