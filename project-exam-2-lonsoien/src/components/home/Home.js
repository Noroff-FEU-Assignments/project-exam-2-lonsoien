import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormContact from '../layout/FormContact'; 
import Heading from '../layout/Heading';
import Headerimage from "../images/Headerimage.png"; 
import sykkelcfolie from "../images/sykkelcfolie.png"; 
import oslologo from "../images/oslologo.jpeg"; 
import Vikenlogo from "../images/Vikenlogo.png";
import fafologo from "../images/fafologo.png";
import kringsjalogo from "../images/kringsjalogo.gif"; 
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

        <div className="container-home">
            <p className="info-text">
            Vi er en landsdekkende leverandør av innovative løsninger for trygg sykkelparkering.
            Vi har som hensikt å skape flere trygge sykkelparkeringer i nærhet til bruker, og at 
            dette skal inspirere til økt bruk av sykkel som fremkomstmiddel.
            </p>
            <Button href="/About" variant="om-oss">OM OSS</Button>
        </div>

        <Container>
          <Row>
            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="Sykkelcontainer med Trepanel"
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
              alt="Sykkelcontainer med Folie"
            />
            </Col>

            <Col md={6}>
            <img
              className="d-block w-100"
              src={sykkelcfolie}
              alt="Habitatpanel"
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
              alt="Trerampe"
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
        <Container class="logo">
          <Row xs={6}>
            <Col>
            <img
            className="d-block w-100"
              src={oslologo}
              alt="Oslo-community Logo"
            />
            </Col>
            <Col>
            <img
              className="d-block w-100"
              src={Vikenlogo}
              alt="Viken-community Logo"
            />
            </Col>
            <Col>
            <img
              className="d-block w-100"
              src={fafologo}
              alt="Fafo Logo"
            />
            </Col>

            <Col>
            <img
              className="d-block w-100"
              src={kringsjalogo}
              alt="Kringsjå School Logo"
            />
            </Col>
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
                <FormContact />
            </Col>
          </Row>
        </Container>
    
        <p>Organisasjonsnr: 9999999999</p>  
        </>
        ); 
    }
    
    export default Home