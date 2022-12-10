import React from 'react'; 
import FormContact from '../layout/FormContact';
import {FaEnvelope} from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa'; 
import { FaMapPin } from 'react-icons/fa'; 
import { FaFacebook } from 'react-icons/fa'; 
import { FaYoutube } from 'react-icons/fa'; 
import { FaTwitter } from 'react-icons/fa'; 


function Footer() {
    return (
        <>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/*Column 1 */}
              <div className="col-md-6 col sm-6" style={{marginTop: "100px"}}>
                <h4>Kontakt Oss</h4>
                <ul className="list-unstyled">
                  <li><FaMobileAlt/>  (+47) 923 11 461</li>
                  <li><FaEnvelope/>   post@environmentbox.no</li>
                  <li><FaMapPin/> Tønsberg</li>
                </ul>
                <div style={{marginTop: "200px",fontSize: "50px"}}> <FaFacebook/> &nbsp; <FaYoutube/>  &nbsp; <FaTwitter/></div>
              </div>
              <div className="col-md-6 col sm-6">
              <FormContact />
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p style={{marginTop: "30px", paddingTop: "20px", textAlign: "center"}}>
                &copy;{new Date().getFullYear()} Environmentbox AS - Organisasjonsnr: 999999999
              </p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer; 

