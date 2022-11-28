import React from 'react'; 
import headerimage from '../../images/headerimage.png'; 
//import Container from 'react-bootstrap/esm/Container';
//import Col from 'react-bootstrap/esm/Col';
//import Row from 'react-bootstrap/esm/Row';


function Header() {
  return (
    <>
    <div>
        <img src={headerimage} alt="Header Environmentbox" className="container-fluid" />
        </div>
          <h3>Skreddersydde systemer for trygg sykkelparkering</h3>
      </>
  );
}

export default Header;


// className="d-block w-100"
