import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Environmentlogo from '../../images/logo/Environmentlogo.png'; 

function Menu() {
    return (
        <>
        <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Environmentlogo} alt="brand logo" style={{width: "3.5rem"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link href="/" className="nav-link">
								HOME
							</Nav.Link>
            <NavDropdown title="PRODUKTER" id="basic-nav-dropdown">
              <NavDropdown.Item href="/containerfolie">Sykkelcontainer Folie</NavDropdown.Item>
              <NavDropdown.Item href="/containertrepanel">Sykkelcontainer Trepanel</NavDropdown.Item>
              <NavDropdown.Item href="/habitatpanel">Habitatpanel</NavDropdown.Item>
              <NavDropdown.Item href="/sykkelhotell">Sykkelhotell</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/projects" className="nav-link">PROSJEKTER</Nav.Link>
            <Nav.Link href="/about" className="nav-link">OM OSS</Nav.Link>
            <Nav.Link href="/login" className="nav-link">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    ); 
}

export default Menu 


