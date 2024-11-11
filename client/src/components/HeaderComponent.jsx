import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/HeaderComponent.css';



function Header()  {
  return (
    <Navbar  variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img src={logo} style={{ maxHeight: '80px', maxWidth: '80px' }} alt="Company Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Become a Seller</Nav.Link>
        <NavDropdown title="Explore" id="dropdown-menu-link">
          <NavDropdown.Item href="#">Community</NavDropdown.Item>
          <NavDropdown.Item href="#">Answers</NavDropdown.Item>
          <NavDropdown.Item href="#">Blog</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <form class="form-inline mr-auto" target="_self">
      <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input class="form-control search-field" type="search" name="search" id="search-field"/></div>
</form>
      <Nav className='ms-auto'>
        <Nav.Link href="#" className="login">Log In</Nav.Link>
        <Button variant="light" className="action-button" href="#">Sign Up</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  );
}

export default Header