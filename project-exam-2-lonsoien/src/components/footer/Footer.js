import React from 'react'; 
import FormContact from '../layout/FormContact';
//import Container from 'react-bootstrap/esm/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/esm/Col';

function Footer() {
    return (
        <>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/*Column 1 */}
              <div className="col-md-6 col sm-6">
                <h4>Kontakt Oss</h4>
                <ul className="list-unstyled">
                  <li>(+47) 923 11 461</li>
                  <li>post@environmentbox.no</li>
                  <li>Tønsberg</li>
                </ul>
              </div>
              <div className="col-md-6 col sm-6">
              <FormContact />
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Organisasjonsnr: 999999999
              </p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer; 

//  <footer>
//<Container className="footer-box">
//<Row>
//  <Col md={6}>
 //     <h5>KONTAKT OSS</h5>
 //     <p> (+47) 923 11 461</p>
  //    <p> post@environmentbox.no</p>
  //    <p> Tønsberg</p>
 // </Col>
 // <Col md={6}>
  //    <FormContact />
 // </Col>
// </Row>
// </Container>

 // <p>Organisasjonsnr: 9999999999</p>  
//  </footer>