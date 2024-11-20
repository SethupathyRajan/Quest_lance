import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from '../assets/logo.png';
import '../styles/HeaderComponent.css';


function Header()  {

/*   const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => setShowSignIn(true);
  const handleClose = () => setShowSignIn(false); */


  return (<>
    <Navbar  fixed="top" variant="dark" expand="md">
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
          <NavDropdown.Item href="#">Answers</NavDropdown.Item>
          <NavDropdown.Item href="#">Blog</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className='ms-auto'>
        <LinkContainer to="/login">
        <Nav.Link href="#" className="login" >Log In</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
        <Button variant="light" className="action-button">Sign Up</Button>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


{/*   <Modal show={showSignup} onHide={handleClose}>
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
      </Modal> */}
  </>
  );
}

export default Header