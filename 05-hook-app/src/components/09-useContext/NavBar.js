import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
