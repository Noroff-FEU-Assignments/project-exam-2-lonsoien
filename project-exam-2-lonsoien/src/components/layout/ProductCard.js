import Button from 'react-bootstrap/Button';
import Sykkelcontainer1 from '../../images/products/Sykkelcontainer1.jpg';
import Sykkelfolie3 from '../../images/products/Sykkelfolie3.jpg'; 
import Habitattpanel1 from '../../images/products/Habitattpanel1.jpg'; 
import sykkelhotell1 from '../../images/products/sykkelhotell1.jpeg';

function ProductCard() {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={Sykkelcontainer1} className="card-img-top" alt="sykkel-trepanel" style={{height: "400px"}} />
      <div className="card-body">
        <h5 class="card-title">SYKKELCONTAINER MED TREPANEL</h5>
        <br></br>
        <p class="card-text">En bærekraftig parkeringsløsning for sykkel. Enheten er kledd i trevirke for et moderne design. Spesielt egnet for skoler og bedrifter.</p>
        <Button href="/containertrepanel" variant="om-oss">Se Produkt</Button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Sykkelfolie3} className="card-img-top" alt="sykkel-folie" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">SYKKELCONTAINER MED FOLIE</h5>
        <br></br>
        <p className="card-text">Denne parkeringsløsningen for sykkel har utvendig store flater med synlig og god reklameplass. Egnet for markedsføring og annen profilering.</p>
        <Button href="/containerfolie" variant="om-oss">Se Produkt</Button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Habitattpanel1} className="card-img-top" alt="habitat" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">HABITATPANEL</h5>
        <br></br>
        <p className="card-text">Med et insektshotell skapes et beskyttelnde miljø for humler og andre insekter.</p>
        <br></br>
        <Button href="/habitatpanel" variant="om-oss">Se Produkt</Button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={sykkelhotell1} className="card-img-top" alt="sykkelhotell" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">SYKKELHOTELL</h5>
        <br></br>
        <p className="card-text">Vi prosjekterer og leverer modulbaserte løsninger for større områder. Egnet for skoler, borettslag og større bygg.</p>
        <Button href="/sykkelhotell" variant="om-oss">Se Produkt</Button>
      </div>
    </div>
  </div>
</div>
</>
);
}     

export default ProductCard; 
