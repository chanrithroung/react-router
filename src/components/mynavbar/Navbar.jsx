import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark text-light">
      <Container>
        <Navbar.Brand href="#home">  <Link className='text-white text-decoration-none' to="home">Home</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link className='text-white text-decoration-none'   to="about">About</Link>  </Nav.Link>
            <Nav.Link> <Link className='text-white text-decoration-none' to="contact"> Contact </Link>  </Nav.Link>  
            <Nav.Link> <Link className='text-white text-decoration-none' to="users"> Users  </Link>  </Nav.Link>  
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;