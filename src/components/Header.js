import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';


import {Link} from 'react-router-dom';

const Header = () => (
<Navbar inverse collapseOnSelect fluid style={{ borderRadius: 0 }}>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/" > SPA</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="/create">
        Nowy klient
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default Header;