import React from "react";
import "./mapapp.css";
//import Geolocation from "react-geolocation";

export class MapApp extends React.Component {
  render() {
    const { long } = this.props.long;
    const { lat } = this.props.lat;
    return (
      <div className="section">
        <div id="outer">
          <h4 className="center enlargelocation">
            your location:{" "}
            <span className="underline">
              {this.props.long} , {this.props.lat}{" "}
            </span>
          </h4>
        </div>
      </div>
    );
  }
}
