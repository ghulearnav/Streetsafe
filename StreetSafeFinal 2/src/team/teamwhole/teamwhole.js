import React from "react";
import "./teamwhole.css";
import {
  MarkBio,
  ArnavBio,
  WillBio,
  JerryBio,
  ChristianBio
} from "../teambios/teambios.js";
import {
  MarkImg,
  ArnavImg,
  WillImg,
  JerryImg,
  ChristianImg
} from "../teamimages/teamimages.js";
import { Github, Linkedin } from "../teamicons/teamicons.js";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class ProfileWhole extends React.Component {
  render() {
    return (
      <div className="peoplesections" id="grad1">
        <h4 className="center" id="header">
          The Team
        </h4>

        <table id="nav-bar">
          <tbody>
            <tr>
              <AnchorLink href="#Mark">
                <td className="single-nav" id="mark-nav">
                  Mark
                </td>
              </AnchorLink>
              <AnchorLink href="#Arnav">
                <td className="single-nav">Arnav</td>
              </AnchorLink>
              <AnchorLink href="#Will">
                <td className="single-nav">Will</td>
              </AnchorLink>
              <AnchorLink href="#Jerry">
                <td className="single-nav">Jerry</td>
              </AnchorLink>
              <AnchorLink href="#Christian">
                <td className="single-nav" id="christian-nav">
                  Christian
                </td>
              </AnchorLink>
            </tr>
          </tbody>
        </table>

        <div name="Mark" id="Mark" className="center">
          <table>
            <tr>
              <td>
                <MarkImg />
                <MarkBio />
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/sennem" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Arnav">
          <table>
            <tr>
              <td>
                <ArnavImg />
                <div class="bump">
                  <ArnavBio />
                </div>
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/ghulearnav" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Will">
          <table>
            <tr>
              <td>
                <WillImg />
                <div class="bump">
                  <WillBio />
                </div>
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/ghulearnav" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Jerry">
          <table>
            <tr>
              <td>
                <JerryImg />
                <div class="bump">
                  <JerryBio />
                </div>
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/ghulearnav" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Christian">
          <table>
            <tr>
              <td>
                <ChristianImg />
                <div class="bump">
                  <ChristianBio />
                </div>
              </td>
            </tr>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/nxvgalang" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
