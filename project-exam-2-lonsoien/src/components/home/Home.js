import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Heading from '../layout/Heading';
import oslologo from "../../images/logo/oslologo.jpeg"; 
import Vikenlogo from "../../images/logo/Vikenlogo.png";
import fafologo from "../../images/logo/fafologo.png";
import kringsjalogo from "../../images/logo/kringsjalogo.gif"; 
import CarouselProjects from '../carousel/CarouselProjects'; 
import Header from '../header/Header'; 
import ProductCard from '../layout/ProductCard';




function Home() {
    return (
        <>
        <Heading title="ENVIRONMENTBOX"/>
        <Header />
        <div className="container-home">
            <p className="info-text">
            Vi er en landsdekkende leverandør av innovative løsninger for trygg sykkelparkering.
            Vi har som hensikt å skape flere trygge sykkelparkeringer i nærhet til bruker, og at 
            dette skal inspirere til økt bruk av sykkel som fremkomstmiddel.
            </p>
            <Button href="/About" variant="om-oss">OM OSS</Button>
        </div>

        <ProductCard />
        <br></br>
        <CarouselProjects />
        <br></br>
        <h3>NOEN AV VÅRE KUNDER</h3>
        <br></br>
        <Container>
          <Row xs={4} style={{paddingLeft: "50px"}}>
            <Col>
            <img className="d-block w-50" style={{padding: "15px", margin: "10px"}}
              src={oslologo}
              alt="Oslo-community Logo"
            />
            </Col>
            <Col>
            <img className="d-block w-50" style={{padding: "15px", margin: "10px"}}
              src={Vikenlogo}
              alt="Viken-community Logo"
            />
            </Col>
            <Col>
            <img className="d-block w-50" style={{padding: "15px", margin: "10px"}}
              src={fafologo}
              alt="Fafo Logo"
            />
            </Col>

            <Col>
            <img className="d-block w-50" style={{padding: "15px", margin: "10px"}}
              src={kringsjalogo}
              alt="Kringsjå School Logo"
            />
            </Col>
          </Row>
        </Container>
        </>
        ); 
    }

    export default Home