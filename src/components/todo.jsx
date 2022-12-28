import React, { Component } from "react";
import CommonTabs from "./../common/commonTabs";
import "../css/todo.css";

import axios from "axios";

export default class Todo extends Component {
  num = 10;
  todoNum = 1;
  state = {
    todos: [],
    inputValue: "",
  };

  updateInputValue(evt) {
    const val = evt.target.value;
    // ...
    this.setState({
      inputValue: val,
    });
  }

  async componentDidMount() {
    const response = await axios.get(
      `http://localhost:8081/api/v1/todo/get-todo/${this.num}`
    );
    this.setState({ todos: response.data.data });
  }

  handleAdd = async () => {
    const obj = { todoId : this.todoNum++,todoName: this.state.inputValue, user: 10 };
    const response = await axios.post(
      "http://localhost:8081/api/v1/todo/add-todo/",
      obj
    );
    const todos = [response.data.data, ...this.state.todos];
    this.setState({ todos });
    console.log(response.data.data);
  };
  handleDelete = async (todo) => {
    const todos = this.state.todos.filter((p) => p.id !== todo.todoId); 
    this.setState({ todos });
    console.log(todo.todoId + "   " + todo);
    await axios.delete(
      `http://localhost:8081/api/v1/todo/delete-todo/${todo.todoId}`
    );
  };
  render() {
    return (
      <div>
        <CommonTabs />
        <div className="content-section">
          <div className="section-1-todo">
            <div className="div-add-todo">
              <div className="add-todo-heading">Add a Task</div>
              <div className="add-todo-section">
                <div className="add-todo-input">
                  <input
                    value={this.state.inputValue}
                    onChange={(evt) => this.updateInputValue(evt)}
                    className="input-todo"
                    type="text"
                    name="message"
                    placeholder="Enter a Task"
                  />
                </div>
                <div className="btn-add-todo" onClick={() => this.handleAdd()}>
                  Add
                </div>
              </div>
            </div>
          </div>
          <div className="section-2-todo">
            <div className="div-todo-list">
              <div className="todo-list-heading">Tasks to Complete</div>
              <div className="todo-list-section">
                {this.state.todos.map((todo) => (
                  <div key={todo.todoId} className="div-todo">
                    <div className="todo-task">{todo.todoName}</div>
                    <div
                      className="btn-done"
                      onClick={() => this.handleDelete(todo)}
                    >
                      Done
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
