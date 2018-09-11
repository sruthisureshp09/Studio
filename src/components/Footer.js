import React from "react";
import { Link } from "react-router-dom";
/* import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css"; */

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <ul>
                <li>
                  <a href="">PORTFOLIO</a>
                </li>
                <li>
                  <a href="">CLIENTS</a>
                </li>
                <li>
                  <a href="">STUDIO</a>
                </li>
                <li>
                  <a href="">TEAM</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
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
};

export default Footer;
