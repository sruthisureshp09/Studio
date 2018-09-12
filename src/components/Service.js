import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <section className="service mb-5 ">
        <div className="container">
          <h1>SERVICES</h1>
          <h2>SERVICES</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div className="row">
            <div className="col-sm-6 col-12 col-lg-4  mb-4">
              <div className="service-block block1">
                <img
                  src={require("../assets/images/service-icon1.png")}
                  alt=""
                />
                <h3>Photography</h3>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-lg-4 mb-4">
              <div className="service-block block2">
                <img
                  src={require("../assets/images/service-icon2.png")}
                  alt=""
                />
                <h3>Film Making</h3>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-lg-4 mb-4">
              <div className="service-block block3">
                <img
                  src={require("../assets/images/service-icon3.png")}
                  alt=""
                />
                <h3>Designing</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="service-line d-flex align-items-center">
              <hr className="service-line-hr mr-3" />
              <a href="">SHOW DETAILS</a>
              <hr className="service-line-hr ml-3" />
            </div>
          </div>
        </div>
      </section>
      <section className="makeover mb-5 ">
        <h1>MAKEOVER</h1>
        <h2>MAKEOVER</h2>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </section>
    </div>
  );
};

export default Service;
