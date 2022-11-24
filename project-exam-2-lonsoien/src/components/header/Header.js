import React from 'react'; 
import headerimage from '../../images/headerimage.png'; 


function Header() {
  return (
    <div class="header-image">
      <img
        className="d-block w-100"
        src={headerimage}
        alt="Header Environmentbox"
        />
            <h3>Skreddersydde systemer for trygg sykkelparkering</h3>
        </div>
  );
}

export default Header;