import React from 'react'; 
//import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fafologo from '../../images/logo/fafologo.png'; 
import Heading from '../layout/Heading';

export default function About() {
  return (
    <>
  <Heading title="Om Environmentbox AS" />
  <div className="container-home">
            <p className="info-text">
            Vi er en landsdekkende leverandør av innovative løsninger for trygg sykkelparkering.
            Vi har som hensikt å skape flere trygge sykkelparkeringer i nærhet til bruker, og at 
            dette skal inspirere til økt bruk av sykkel som fremkomstmiddel.
            </p>
            <p className="info-text">
            Våre kunder består av transportselskaper, kommuner, utbyggere, kjøpesentre og forvaltere av nærings- og boligbygg. 
            For kunder som ønsker å oppnå miljøsertifisering er vi en naturlig samarbeidspartner.
            Vi hjelper din bedrift med å skreddersy systemer for trygg sykkelparkering.
            </p>
            <h3>Kontakt Personer</h3>
        </div>
        <Row>
            <Col sm={6} style={{textAlign: "center", padding: "10px"}}>
            <div className="profile-img">
            <img style={{borderRadius: "50%", width: "200px", height: "200px"}}
              src={fafologo}
              alt="personlia contact"
            />
            </div>
            </Col>
            <Col sm={6} style={{textAlign: "center", padding: "10px"}}>
            <div className="profile-img">
            <img style={{borderRadius: "50%", width: "200px", height: "200px"}}
              src={fafologo}
              alt="personlia contact"
            />
            </div>
            </Col>
            </Row>
  </>
  );
}