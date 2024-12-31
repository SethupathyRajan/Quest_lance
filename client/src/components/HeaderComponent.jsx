import { useContext } from 'react';

import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/HeaderComponent.css';

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext); // Access the global login state

  return (
    <Navbar fixed="top" variant="dark" expand="md">
      <Navbar.Brand href="#">
        <LinkContainer to="/">
          <img src={logo} style={{ maxHeight: '80px', maxWidth: '80px' }} alt="Company Logo" />
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/start-selling">
            <Nav.Link href="#">Become a Seller</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Explore" id="dropdown-menu-link">
            <NavDropdown.Item href="#">Community</NavDropdown.Item>
            <LinkContainer to="/answers">
            <NavDropdown.Item href="#">Answers</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="#">Blog</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='ms-auto'>
          {isLoggedIn ? (
            <>
              <Nav className="ms-auto">
      <LinkContainer to="/profile">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={logout}>Log Out</Nav.Link>
    </Nav>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link href="#" className="login">Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Button variant="light" className="action-button">Sign Up</Button>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
