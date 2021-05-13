import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">New York Mets</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/about"
              className="nav-link"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              to="/players"
              className="nav-link"
            >
              Players
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
