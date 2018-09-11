import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <section className="banner d-flex justify-content-between">
      <div className="social-icons d-flex">
        <div className="d-flex social-icon-container align-items-center">
          <div className="d-flex">
            <img src={require("../assets/images/facebook.png")} alt="" />
            <span>FACEBOOK</span>
            <hr />
            <img src={require("../assets/images/instagram.png")} alt="" />
            <span>INSTAGRAM</span>
          </div>
        </div>
      </div>
      <div className="container pl-0 pr-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={require("../assets/images/banner.png")}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require("../assets/images/banner.png")}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require("../assets/images/banner.png")}
                alt="Second slide"
              />
            </div>
          </div>
        </div>

        <div className="banner-content">
          <h4>Professional </h4>
          <h1>PHOTOGRAPHY</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
      </div>
      <div className="social-icons social-icons2 d-flex">
        <div className="d-flex social-icon-container social-icon-container1 align-items-center">
          <div className="d-flex social-div-translte">
            <a
              className=""
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous </span>
            </a>
            <span className="next">PREVIOUS</span>
            <span className="next-point1">5</span>
            <hr />
            <span className="next-point2">2</span>
            <span className="previous">NEXT</span>
            <a
              className=""
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
