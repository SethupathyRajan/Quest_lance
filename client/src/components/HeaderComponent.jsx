import React, { useState } from 'react';
import { Button, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/HeaderComponent.css';
import Signup from './signup';


function Header()  {

  const [showSignup, setShowSignup] = useState(false);

  const handleSignup = () => setShowSignup(true);
  const handleClose = () => setShowSignup(false);


  return (<>
    <Navbar  fixed="top" variant="dark" expand="md">
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
      <Nav className='ms-auto'>
        <Nav.Link href="#" className="login">Log In</Nav.Link>
        <Button variant="light" className="action-button" onClick={handleSignup}>Sign Up</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


  <Modal show={showSignup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  );
}

export default Header