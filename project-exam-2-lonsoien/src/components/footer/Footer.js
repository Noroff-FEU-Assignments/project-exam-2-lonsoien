import React from 'react'; 
import FormContact from '../layout/FormContact';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

function Footer() {
    return (
        <>
        <footer>
        <Container className="footer-box">
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
        </footer>
        </>
    )
}

export default Footer; 