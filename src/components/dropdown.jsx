import React, { Component } from "react";

export default class dropdown extends Component {
  render() {
    return (
      <div>
        <input
          class="dark-light"
          type="checkbox"
          id="dark-light"
          name="dark-light"
        />
        <label for="dark-light"></label>

        <div class="light-back"></div>

        <a href="https://front.codes/" class="logo" target="_blank">
          <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
        </a>
        <div class="sec-center">
          <input
            class="dropdown" 
            type="checkbox"  
            id="dropdown" 
            name="dropdown"   
          />
          <label class="for-dropdown" for="dropdown">
            Dropdown Menu <i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <a href="#">
              Dropdown Link <i class="uil uil-arrow-right"></i> 
            </a>
            <input
              class="dropdown-sub" 
              type="checkbox"
              id="dropdown-sub"
              name="dropdown-sub"
            />
            <label class="for-dropdown-sub" for="dropdown-sub">
              Dropdown Sub <i class="uil uil-plus"></i>
            </label>
            <div class="section-dropdown-sub">
              <a href="#">
                Dropdown Link <i class="uil uil-arrow-right"></i>
              </a>
              <a href="#">
                Dropdown Link <i class="uil uil-arrow-right"></i>
              </a>
            </div>
            <a href="#">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
            <a href="#">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
