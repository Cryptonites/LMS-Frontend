import React, { Component } from "react";
import ActivityTodoBar from "./activityTodoBar";
import NavigationTab from "./navigationTab";
import "../css/commonTabs.css"
import TitleBar from "./titleBar";

export default class CommonTabs extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <div className="side-tabs">
          <NavigationTab />
          <ActivityTodoBar />
        </div>
      </div>
    );
  }
}
