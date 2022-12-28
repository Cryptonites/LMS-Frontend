import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="notification" element={<Notification />} />
            <Route path="courseMaterial" element={<Login />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
