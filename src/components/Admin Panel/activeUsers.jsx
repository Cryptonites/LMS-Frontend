import React, { Component } from "react";
import TitleBar from "./../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/activeUsers.css";

import axios from "axios";

export default class ActiveUsers extends Component {
  state = {
    activeUsers: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8081/api/v1/user/get-state-by-opinion/active"
    );
    this.setState({ activeUsers: response.data.data });
  }
  render() {
    return (
      <div>
        <TitleBar />
        <AdminNavigationTab />
        <div className="admin-section">
          <div className="section-2-todo">
            <div className="div-todo-list">
              <div className="user-state-heading todo-list-heading">
                Active Students
              </div>
              <div className="user-state-section">
                {this.state.activeUsers.map((activeUser) => (
                  <div key={1} className="div-todo">
                    <div className="todo-task">
                      {" "}
                      {activeUser.name} -  {activeUser.email} 
                    </div>
                    <div
                      className="btn-done"
                      onClick={() => this.handleDelete()}
                    >
                      Remove
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
