//import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';

import Sykkelcontainer1 from '../../images/products/Sykkelcontainer1.jpg';
import Sykkelfolie3 from '../../images/products/Sykkelfolie3.jpg'; 
import habitatpanel1 from '../../images/products/habitatpanel1.jpg'; 
import sykkelhotell1 from '../../images/products/sykkelhotell1.jpeg';

function GridExample() {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={Sykkelcontainer1} className="card-img-top" alt="sykkel" style={{height: "400px"}} />
      <div className="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Sykkelfolie3} className="card-img-top" alt="folie" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={habitatpanel1} className="card-img-top" alt="habitat" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={sykkelhotell1} className="card-img-top" alt="sykkelhotell" style={{height: "400px"}} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
      </div>
    </div>
  </div>
</div>
</>
);
}     

export default GridExample; 
