import React from 'react'; 
//import Container from 'react-bootstrap/esm/Container';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
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
        <div className="container-home">
            <div className="row" style={{textAlign: "center"}}>
        <div className="col-md-6 col sm-6">
            <div className="profile-img">
            <img style={{borderRadius: "20%", width: "240px", height: "310px"}}
              src={Benedicte}
              alt="persona contact"
            />
            <h4 style={{fontSize: "22px", padding: "10px"}}>Benedicte</h4>
            <p>Markedsansvarlig</p>
            <p>Kontortelefon (+47) 923 11 461</p>
            <p>Mail: bb@environmentbox.no</p>
            </div>
            </div>
           
            <div className="col-md-6 col sm-6">
            <div className="profile-img">
            <img style={{borderRadius: "20%", width: "240px", height: "310px"}}
              src={Mathias}
              alt="persona contact"
            />
            <h4 style={{fontSize: "22px", padding: "10px"}}>Mathias</h4>
            <p>Salgsansvarlig</p>
            <p>Kontortelefon (+47) 923 11 461</p>
            <p>Mail: mte@environmentbox.no</p>
            </div>
        </div>
        </div>
        </div>
  </>
  );
}