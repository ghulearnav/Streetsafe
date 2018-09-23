import React from "react";
import ReactDOM from "react-dom";
import "./landing.css";
import Geolocation from "react-geolocation";
import Ripples from "react-ripples";
import { MapApp } from "../mapapp/mapapp.js";
import { Textfield } from "react-mdl";
import NavBar from "../../Bar/bar.js";

export default class Landing extends React.Component {
  gotomapapp() {
    var lati = document.getElementById("latitude").value;
    var longi = document.getElementById("longitude").value;
    ReactDOM.render(
      <MapApp lat={lati} long={longi} />,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div id="outer">
        <NavBar />
        <Geolocation
          onSuccess={console.log}
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => (
            <div>
              <div id="topmargin">
                <h3 className="centertext enlargewelcome">Welcome</h3>
                <div className="center">
                  <table>
                    <tr>
                      <td>
                        <input
                          type="text"
                          id="longitude"
                          placeholder="Longitude..."
                          value={longitude}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="latitude"
                          placeholder="Latitude..."
                          value={latitude}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="center">
                  <Ripples>
                    <form action="/map.html" method="get">
                      <a href="https://repl.it/@ghulearnav/DefiantEdibleFont">
                        <button id="viewbutton">View Map</button>
                      </a>
                    </form>
                  </Ripples>
                </div>
                <br />
                <div id="notfound" />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
