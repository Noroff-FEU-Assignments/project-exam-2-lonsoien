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
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HJEM</Nav.Link>
            
            <NavDropdown title="PRODUKTER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sykkelcontainer Folie</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sykkelcontainer Trepanel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Habitatpanel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Trerampe</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">PROSJEKTER</Nav.Link>
            <Nav.Link href="#link">OM OSS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    ); 
}

export default Menu 