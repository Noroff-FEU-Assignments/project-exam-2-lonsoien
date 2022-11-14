import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Menu() {
    return (
        <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link to="/" className="nav-link">
								Home
							</Nav.Link>
              
            <NavDropdown title="PRODUKTER" id="basic-nav-dropdown">
              <NavDropdown.Item to="/sykkelcontainerfolie">Sykkelcontainer Folie</NavDropdown.Item>
              <NavDropdown.Item to="/sykkelcontainertrepanel">Sykkelcontainer Trepanel</NavDropdown.Item>
              <NavDropdown.Item to="/habitatpanel">Habitatpanel</NavDropdown.Item>
              <NavDropdown.Item to="/trerampe">Trerampe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/projects" className="nav-link">PROSJEKTER</Nav.Link>
            <Nav.Link to="/about" className="nav-link">OM OSS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    ); 
}

export default Menu 


