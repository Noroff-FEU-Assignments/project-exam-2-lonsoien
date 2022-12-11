import React from 'react'; 
import headerimage from '../../images/headerimage.png'; 
import Container from 'react-bootstrap/esm/Container';


function Header() {
  return (
    <>
    <Container>
        <img src={headerimage} className="d-block w-100" alt="banner" />
    </Container>
          <h3>Skreddersydde systemer for trygg sykkelparkering</h3>
      </>
  );
}

export default Header;
