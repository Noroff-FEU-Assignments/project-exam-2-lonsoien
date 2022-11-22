import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heading from '../layout/Heading';
import Headerimage from "../images/Headerimage.png"; 
import sykkelcfolie from "../images/sykkelcfolie.png"; 
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
        <Heading title="ENVIRONMENTBOX"/>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Headerimage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Skreddersydde systemer for trygg sykkelparkering</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Headerimage}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Skreddersydde systemer for trygg sykkelparkering</h3>
            </Carousel.Caption>
          </Carousel.Item> 
        </Carousel>

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
            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="First slide"
            />
            </Col>

            
            <Col md={6}>
            <Link to="/ContainerTrepanel">
                <h4>Sykkelcontainer med Trepanel</h4>
                <p>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
                </Link>
            </Col>

            <Col md={6}>
            <Link to="/ContainerFolie">
            <h4>Sykkelcontainer med Folie</h4>
                <p>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
                </Link>
            </Col>

            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="First slide"
            />
            </Col>

            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="First slide"
            />
            </Col>

            <Col md={6}>
            <Link to="/Habitatpanel">
            <h4>Habitatpanel</h4>
                <p>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
                </Link>
            </Col>

            <Col md={6}>
            <Link to="/Trerampe">
            <h4>Trerampe</h4>
                <p>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
                </Link>
            </Col>

            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="First slide"
            />
            </Col>
          </Row>
        </Container>

        <h3>Våre Prosjekter</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Headerimage}
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
              src={Headerimage}
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
              src={Headerimage}
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