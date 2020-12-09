import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import NavLinks from "./NavLinks";

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <p
            className="font-weight-bold"
            style={{ fontSize: "calc(1rem + 1vw)" }}
          >
            Flama
          </p>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLinks />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
