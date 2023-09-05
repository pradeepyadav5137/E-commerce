import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flex">
      <ul className="nav">
        <h2> Routing</h2>
      </ul>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">product</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      </div>
    </header>
  );
}

export default Header;
