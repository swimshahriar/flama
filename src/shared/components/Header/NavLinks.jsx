import React from "react";
import { Nav, NavDropdown, Button } from "react-bootstrap";

const NavLinks = () => {
  return (
    <>
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Channels</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Expenses</NavDropdown.Item>
      </NavDropdown>

      <Button variant="light">JOIN</Button>
    </>
  );
};

export default NavLinks;
