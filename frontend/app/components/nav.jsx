import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Ickly</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={1} href="#">About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={2} href="#">Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;

