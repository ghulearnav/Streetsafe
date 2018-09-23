import React, { Component } from "react";
import ReactDOM from "react-dom";
//import icon from "./Logo6.png";
import "./bar.css";
import TestPage from "../index.js";
import TeamPage from "../team/team.js";
import Landing from "../mapfiles/landing/landing.js";

export class NavBar extends Component {
  gotohome() {
    ReactDOM.render(<TestPage />, document.getElementById("root"));
  }
  gototeam() {
    ReactDOM.render(<TeamPage />, document.getElementById("root"));
  }
  gotopage() {
    ReactDOM.render(<Landing />, document.getElementById("root"));
  }
  render() {
    return (
      <div class="colordiv">
        <table>
          <thead>
            <th className="pic">
              <img src="https://uploads.codesandbox.io/uploads/user/78a8821d-06e3-4bdd-a404-719d7fe67e25/J-9K-Logo6.png" />
            </th>
            <th className="home">
              <a onClick={this.gotohome}>Home</a>
            </th>
            <th className="map">
              <a onClick={this.gotopage}>Map</a>
            </th>
            <th className="team">
              <a onClick={this.gototeam}>Team</a>
            </th>
          </thead>
        </table>
      </div>
    );
  }
}

export default NavBar;
