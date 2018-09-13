import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <ul>
                  <li>
                    <Link to="">PORTFOLIO</Link>
                  </li>
                  {/*  <li>
                  <a href="">CLIENTS</a>
                </li> */}
                  <li>
                    <Link to="">STUDIO</Link>
                  </li>
                  {/*  <li>
                  <a href="">TEAM</a>
                </li> */}
                  <li>
                    <Link to="">CONTACT</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <div className="d-flex justify-content-end align-items-center">
                  <img
                    src={require("../assets/images/facebook.png")}
                    alt="facebook"
                  />
                  <span className="mr-4">FACEBOOK</span>
                  <img
                    src={require("../assets/images/instagram.png")}
                    alt="instagram"
                  />
                  <span>INSTAGRAM</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section className="footer-bottom text-center">
          <p className="mb-0">2018 Ultimate Pictures. All rights reserved</p>
        </section>
      </div>
    );
  }
}
