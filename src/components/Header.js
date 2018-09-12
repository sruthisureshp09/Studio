import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      {/* <!-- start header --> */}
      <header className="d-flex">
        <div className="col-sm-3 pl-0 col-5">
          <img src={require("../assets/images/logo.png")} alt="" />
        </div>
        <div className="col-sm-9 pr-0 col-7">
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
              <Link to="/">STUDIO</Link>
            </li>
            <li>
              <Link className="mr-4" to="#contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* 	-- end header-- */}
    </div>
  );
};

export default Header;
