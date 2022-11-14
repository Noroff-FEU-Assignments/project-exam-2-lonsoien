import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Menu() {
    return (
        <>
        <Navbar sticky="top" />
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link">
								HOME
							</Nav.Link>
              
            <NavDropdown title="PRODUKTER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#sykkelcontainerfolie">Sykkelcontainer Folie</NavDropdown.Item>
              <NavDropdown.Item href="#sykkelcontainertrepanel">Sykkelcontainer Trepanel</NavDropdown.Item>
              <NavDropdown.Item href="#habitatpanel">Habitatpanel</NavDropdown.Item>
              <NavDropdown.Item href="#trerampe">Trerampe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#projects" className="nav-link">PROSJEKTER</Nav.Link>
            <Nav.Link href="#about" className="nav-link">OM OSS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    ); 
}

export default Menu 


