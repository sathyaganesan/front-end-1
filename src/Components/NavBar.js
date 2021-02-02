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
  const logOut = () => { 
    localStorage.setItem('token', "");
  }
  return (
    <div>
      <Navbar style={{backgroundColor: '#DF7F6F'}} light expand="md">
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
            <NavItem>
              <NavLink href="/Add">Add Recipe</NavLink>
            </NavItem>
            
          </Nav>
          {localStorage.getItem('token') &&  <NavLink onClick={logOut} href="/Login">Logout</NavLink>}
              
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;