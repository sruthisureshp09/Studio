import React, { Component } from "react";

import "../styles/signinStyle.css";
import { CSSTransitionGroup } from "react-transition-group";
import "../styles/homeStyle.css";
export default class SignUp extends Component {
  state = {};

  render() {
    return (
      <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div>
          <div id="signinContainer">
            <div className="imgcontainer">
              <img
                src={require("../assets/images/download.png")}
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </label>
            </div>
            <div className="container" style={{ color: "red" }}>
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <span className="psw">
                Forgot <a href="">password?</a>
              </span>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
