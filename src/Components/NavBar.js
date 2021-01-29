import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Family Recipes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/Signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Home">Recipes Page</NavLink>
            </NavItem>
            
          </Nav>
          
              <NavLink href="#">Logout</NavLink>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;