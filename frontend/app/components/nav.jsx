import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar,
         NavbarBrand,
         NavbarToggler,
         Nav,
         NavItem,
         NavLink,
         Collapse,
         Container } from 'reactstrap'


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
  }

  render() {
    return (
        <Navbar className="navbar-custom" color="transparent" light fixed="true" expand="md">
          <Container>
          <NavbarBrand tag={Link} to="/" >Ickly</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
    )
  }

}


export default Navigation;

