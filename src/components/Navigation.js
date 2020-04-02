import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  return (
    <li className={liClassName}>
      <Link to={props.path} className="nav-item">
        {props.name}
      </Link>
      {/* <a href={props.path} className="nav-link">
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a> */}
    </li>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Tivo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/dashboard" name="dashboard" />
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
