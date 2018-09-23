import React from "react";
import "./teamicons.css";

export class Github extends React.Component {
  render() {
    const { glink } = this.props;
    return (
      <div>
        <a href={glink}>
          <img
            src="https://png.icons8.com/metro/1600/github.png"
            alt="Github"
            className="githubimg"
          />
        </a>
      </div>
    );
  }
}
export class Linkedin extends React.Component {
  render() {
    const { ilink } = this.props;
    return (
      <div>
        <a href={ilink}>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_24845.png"
            alt="Linkedin"
            className="linkedinimg"
          />
        </a>
      </div>
    );
  }
}
