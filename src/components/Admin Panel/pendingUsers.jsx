import React, { Component } from "react";
import TitleBar from "./../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";
import "../../css/admin/pendingUser.css";
import axios from "axios";

export default class PendingUsers extends Component {
  state = {
    pendingUsers: [],
  };

  handleApprove = async (id) => {
    const response = await axios.put(
      `http://localhost:8081/api/v1/user/update-active-state`,
      {
        userId: id,
        activeState: true,
      }
    );
    const pendingUsers = this.state.pendingUsers.filter((p) => p.id !== id);
    this.setState({ pendingUsers });
    console.log(pendingUsers);
  };
  async componentDidUpdate() {}

  async componentDidMount() {
    const response = await axios.get(
      "http://localhost:8081/api/v1/user/get-state-by-opinion/inactive"
    );
    this.setState({ pendingUsers: response.data.data });
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
                Pending Users
              </div>
              <div className="user-state-section">
                {this.state.pendingUsers.map((pendingUser) => (
                  <div key={pendingUser.userId} className="div-todo">
                    <div className="todo-task">
                      {pendingUser.name} - {pendingUser.email}
                    </div>
                    <div
                      className="btn-done"
                      onClick={() => this.handleApprove(pendingUser.userId)}
                    >
                      Approve
                    </div>
                    <div
                      className="btn-delete-user btn-done"
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
