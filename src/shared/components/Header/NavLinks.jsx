import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

const NavLinks = () => {
  const auth = useAuth();

  return (
    <>
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>

      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item>
          <Link to="/usr/dashboard">Dashboard</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/usr/channels">Channels</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to="/usr/expences">Expences</Link>
        </NavDropdown.Item>
      </NavDropdown>
      {auth.user ? (
        <Nav.Link onClick={() => auth.signout()}>Logout</Nav.Link>
      ) : (
        <Nav.Link>
          <Link to="/auth">Login/Register</Link>
        </Nav.Link>
      )}
    </>
  );
};

export default NavLinks;
