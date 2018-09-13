import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MakeOver extends Component {
  render() {
    return (
      <section class="makeover mb-5 ">
        <h1>MAKEOVER</h1>
        <h2>MAKEOVER</h2>
        <p class="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div class="container">
          <div class="autoplay">
            <div class="makeover-container">
              <img src={require("../assets/images/makeover1.png")} alt="" />
            </div>
            <div class="dd" />
            <div class="makeover-container">
              <img src={require("../assets/images/makeover2.png")} alt="" />
            </div>
            <div class="makeover-container">
              <img src={require("../assets/images/makeover1.png")} alt="" />
            </div>
            <div class="makeover-container">
              <img src={require("../assets/images/makeover2.png")} alt="" />
            </div>
          </div>
          <div class="middle-arrow">
            <img src={require("../assets/images/makeover-arrow.png")} alt="" />
          </div>
          <div class="denote-page">
            <div class="first">1</div>
            <div class="middle" />
            <div class="last">4</div>
          </div>
        </div>
      </section>
    );
  }
}
