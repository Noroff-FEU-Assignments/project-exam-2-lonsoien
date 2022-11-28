import React from 'react'; 
//import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Benedicte from '../../images/profile/Benedicte.jpeg';
import Mathias from '../../images/profile/Mathias.jpeg';
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
            <Col style={{textAlign: "center", padding: "10px"}}>
            <div className="profile-img">
            <img style={{borderRadius: "20%", width: "240px", height: "310px"}}
              src={Benedicte}
              alt="personlia contact"
            />
            <h4 style={{fontSize: "22px", padding: "10px"}}>Benedicte</h4>
            <p>Markedsansvarlig</p>
            </div>
            </Col>
            <Col md="auto"></Col>
            &nbsp;
            <Col style={{textAlign: "center", padding: "10px"}}>
            <div className="profile-img">
            <img style={{borderRadius: "20%", width: "240px", height: "310px"}}
              src={Mathias}
              alt="personlia contact"
            />
            <h4 style={{fontSize: "22px", padding: "10px"}}>Mathias</h4>
            <p>Salgsansvarlig</p>
            </div>
            </Col>
            </Row>
  </>
  );
}