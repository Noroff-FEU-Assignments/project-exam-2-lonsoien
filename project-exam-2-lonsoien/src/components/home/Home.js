import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Home() {
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
    <h1>ENVIRONMENT BOX</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h2>Skreddersydde systemer for trygg sykkelparkering</h2>
    <Container>
      <Row>
        <Col>
        <p>
        Vi er en landsdekkende leverandør av innovative løsninger for trygg sykkelparkering.
        Vi har som hensikt å skape flere trygge sykkelparkeringer i nærhet til bruker, og at 
        dette skal inspirere til økt bruk av sykkel som fremkomstmiddel.
        </p>
        <button class="om-oss">OM OSS</button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col md={6}>1 of 1</Col>
        <Col md={6}>2 of 2</Col>
        <Col md={6}>3 of 3</Col>
        <Col md={6}>4 of 4</Col>
      </Row>
    </Container>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h3>NOEN AV VÅRE KUNDER</h3>
    <Container>
      <Row>
        <Col>Logo</Col>
        <Col>Logo</Col>
        <Col>Logo</Col>
        <Col>Logo</Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col md={6}>
            <h5>KONTAKT OSS</h5>
            <p> (+47) 923 11 461</p>
            <p> post@environmentbox.no</p>
            <p> Tønsberg</p>
        </Col>
        <Col md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="name" placeholder="Navn" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      <Button variant="send" type="submit">
        SEND
        
        </Button>
    </Form>
        </Col>
      </Row>
    </Container>

    <p>Organisasjonsnr: 9999999999</p>  
    </>
    ); 
}

export default Home