import React from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Portfolio = () => {
  return (
    /*  <!-- porfolio start --> */
    <section className="portfolio">
      <h1>PORTFOLIO</h1>
      <h2>PORTFOLIO</h2>
      <div className="d-flex text-center">
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
      <div className="d-flex">
        <div className="toolbar mb2 mt2">
          <button className="btn-portfolio fil-cat" data-rel="all">
            ALL
          </button>
          <button className="btn-portfolio fil-cat" data-rel="web">
            WEDDING
          </button>
          <button className="btn-portfolio fil-cat" data-rel="flyers">
            PERSONAL
          </button>
          <button className="btn-portfolio fil-cat" data-rel="bcards">
            NATURE
          </button>
          <button className="btn-portfolio fil-cat" data-rel="bcards">
            CORPORATE
          </button>
          <button className="btn-portfolio fil-cat" data-rel="bcards">
            WILDLIFE
          </button>
        </div>
      </div>
      <div className="d-flex">
        <div id="portfolio">
          <Gallery />
          {/* <div className="tile scale-anm web all mt-5">
            <img src={require("../assets/images/port90.png")} alt="" />
          </div>
          <div className="tile scale-anm bcards all">
            <img src={require("../assets/images/prot1.png")} alt="1" />
          </div>
          <div className="tile scale-anm all">
            <img src={require("../assets/images/port7.png")} alt="5" />
          </div>
          <div className="tile scale-anm web all">
            <img src={require("../assets/images/port2.png")} alt="2" />
          </div>
          <div className="tile scale-anm flyers all">
            <img src={require("../assets/images/port6.png")} alt="4" />
          </div>
          <div className="tile scale-anm bcards all">
            <img src={require("../assets/images/port5.png")} alt="3" />
          </div>
          <div className="tile scale-anm flyers all">
            <img src={require("../assets/images/port9.png")} alt="6" />
          </div> */}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="service-line d-flex align-items-center">
          <hr className="service-line-hr mr-3" />
          <a href="">SHOW DETAILS</a>
          <hr className="service-line-hr ml-3" />
        </div>
      </div>
      {/* <div style="clear:both;" /> */}
    </section>
  );
};

export default Portfolio;
