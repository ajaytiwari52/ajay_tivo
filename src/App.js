import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./home";
import Dashboard from "./components/Dashboard";
import Customer from "./components/Customer";
import Search from "./components/Search";

export default class extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar>
          {/* "Link" in brand component since just redirect is needed */}
          <Navbar.Brand as={NavLink} to="/">
            Tivo
          </Navbar.Brand>
          <Nav>
            {/* "NavLink" here since "active" class styling is needed */}
            <Nav.Link as={NavLink} to="/" exact>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/customer">
              Customer
            </Nav.Link>
            <Nav.Link as={NavLink} to="/search">
              Search
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/search" exact component={Search} />
      </div>
    </Router>
    );
  }
}
