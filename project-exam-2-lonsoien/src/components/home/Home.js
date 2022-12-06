import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Heading from '../layout/Heading';
import Sykkelcontainer1 from '../../images/products/Sykkelcontainer1.jpg';
import Sykkelfolie3 from '../../images/products/Sykkelfolie3.jpg'; 
import habitatpanel1 from '../../images/products/habitatpanel1.jpg'; 
import sykkelhotell1 from '../../images/products/sykkelhotell1.jpeg';
import oslologo from "../../images/logo/oslologo.jpeg"; 
import Vikenlogo from "../../images/logo/Vikenlogo.png";
import fafologo from "../../images/logo/fafologo.png";
import kringsjalogo from "../../images/logo/kringsjalogo.gif"; 
import CarouselProjects from '../carousel/CarouselProjects'; 
import { Link } from 'react-router-dom';
import Header from '../header/Header'; 



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

        <Container>
          <Row>
            <Col md={6}>
            <img className="d-block w-100" style={{height: "400px"}}
              src={Sykkelcontainer1}
              alt="Sykkelcontainer med Trepanel"
            />
            </Col>
            
            <Col md={6} className="trepanel" style={{padding: "30px", backgroundColor: '#DFD4C0'}}>
            <Link to="/ContainerTrepanel" className="text-decoration-none" style={{color: 'black'}}>
                <h4>Sykkelcontainer med Trepanel</h4>
                </Link>
                <p style={{fontSize: "20px"}}>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
            </Col>

            <Col md={6} style={{padding: "30px"}}>
            <Link to="/ContainerFolie" className="text-decoration-none" style={{color: 'black'}}>
            <h4>Sykkelcontainer med Folie</h4>
                </Link>
                <p style={{fontSize: "20px"}}>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
            </Col>

            <Col md={6}>
            <img className="d-block w-100" style={{height: "400px"}}
              src={Sykkelfolie3}
              alt="Sykkelcontainer med Folie"
            />
            </Col>

            <Col md={6}>
            <img className="d-block w-100" style={{height: "400px"}}
              src={habitatpanel1}
              alt="Habitatpanel"
            />
            </Col>

            <Col md={6} style={{padding: "30px", backgroundColor: '#DFD4C0'}}>
            <Link to="/Habitatpanel" className="text-decoration-none" style={{color: 'black'}}>
            <h4>Habitatpanel</h4>
                </Link>
                <p style={{fontSize: "20px"}}>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
            </Col>

            <Col md={6} style={{padding: "30px"}}>
            <Link to="/Trerampe" className="text-decoration-none" style={{color: 'black'}}>
            <h4>Trerampe</h4>
                </Link>
                <p style={{fontSize: "20px"}}>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
            </Col>

            <Col md={6}>
            <img className="d-block w-100" style={{height: "400px"}}
              src={Sykkelfolie3}
              alt="Trerampe"
            />
            </Col>

            <Col md={6}>
            <img className="d-block w-100" style={{height: "400px"}}
              src={sykkelhotell1}
              alt="Sykkelhotell"
            />
            </Col>

            <Col md={6} style={{padding: "30px", backgroundColor: '#DFD4C0'}}>
            <Link to="/Sykkelhotell" className="text-decoration-none" style={{color: 'black'}}>
            <h4>Sykkelhotell</h4>
                </Link>
                <p style={{fontSize: "20px"}}>Effektiv og innovativ parkeringsløsning for sykler. Spesielt egnet for bedrifter og skoler.</p>
            </Col>
          </Row>
        </Container>
        <CarouselProjects />
        
        <h3>NOEN AV VÅRE KUNDER</h3>
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