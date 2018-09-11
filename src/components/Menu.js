import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/login">Sign In </Link>
      </li>
      <li>
        {" "}
        <Link to="/register">Sign Up </Link>
      </li>
      <li>
        {" "}
        <Link to="/about"> About </Link>
      </li>
    </ul>
  );
};

export default Menu;
