import React from "react";
import "./team.js";
import { ProfileWhole } from "./teamwhole/teamwhole.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavBar from "../Bar/bar.js";

export default class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProfileWhole />
      </div>
    );
  }
}
