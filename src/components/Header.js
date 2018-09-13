import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        {/* <!-- start header --> */}
        <header className="d-flex">
          <div className="col-sm-3 pl-0 col-8">
            <a href="">
              <img src={require("../assets/images/logo.png")} alt="" />
            </a>
          </div>
          <div className="col-sm-9 pr-0 col-4">
            <div className="btn">
              <div className="flex-column dot-center">
                <div className="d-flex">
                  <span className="menu-dots" />
                  <span className="menu-dots" />
                </div>
                <div className="d-flex">
                  <span className="menu-dots" />
                  <span className="menu-dots" />
                </div>
              </div>
            </div>
            <ul className="nav">
              <li>
                <Link to="#portfolio">PORTFOLIO</Link>
              </li>

              <li>
                <Link to="">STUDIO</Link>
              </li>
              <li>
                <Link className="" to="#contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </header>
        {/* 	-- end header-- */}
      </div>
    );
  }
}
