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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Family Recipes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Recipes Page</NavLink>
            </NavItem>
            
          </Nav>
          
              <NavLink href="#">Logout</NavLink>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;