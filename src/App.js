import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import SideMenu from "./components/SideMenu";
import Contact from "./components/Contact";
import MakeOver from "./components/MakeOver";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
require("./assets/js/custom.js");
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <Portfolio />
        <Service />
        <MakeOver />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
