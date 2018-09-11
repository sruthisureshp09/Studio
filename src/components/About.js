import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../styles/aboutStyle.css";

const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>This is the About Page</div>
    </CSSTransitionGroup>
  );
};

export default About;
