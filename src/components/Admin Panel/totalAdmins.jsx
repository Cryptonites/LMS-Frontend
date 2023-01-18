import React, { Component } from "react";
import TitleBar from "./../../common/titleBar";
import AdminNavigationTab from "./adminNavigationTab";

export default class TotalAdmins extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <AdminNavigationTab />
        <div className="admin-section">
          <div className="section-2-todo">
            <div className="div-todo-list">
              <div className="user-state-heading todo-list-heading">Total Admins</div>
              <div className="user-state-section">
                {
                  <div key={1} className="div-todo">
                    <div className="todo-task">Test</div>
                    <div
                      className="btn-done"
                      onClick={() => this.handleDelete()}
                    >
                      Remove
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
