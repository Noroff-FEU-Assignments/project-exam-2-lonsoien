
import Heading from '../layout/Heading';
import Carousel from 'react-bootstrap/Carousel';
import habitatpanel1 from '../../images/products/habitatpanel1.jpg'; 
import habitatpanel2 from '../../images/products/habitatpanel2.jpg';
import habitatpanel3 from '../../images/products/habitatpanel3.jpg';
import habitatpanel4 from '../../images/products/habitatpanel4.jpg';
import React, { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} style={{padding: "20px"}}>
      <Carousel.Item>
        <img
          className=".d-block w-100"
          src={habitatpanel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={habitatpanel2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={habitatpanel3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={habitatpanel4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default function Habitatpanel() {
  return (
    <>
    <section>
  <Heading title="Habitatpanel" />
  <ControlledCarousel />
  <div className="tekst-container" style={{textAlign: "center", padding: "20px", justifyContent: "space-around"}}>
  <p>
  Vi tilbyr et miljø- og gjenbrukskonsept hvor brukte containere blir redesignet for trygg sykkelparkering.
  Vårt miljøvennlige sykkelhotell er en arealeffektiv måte å parkere syklene på innendørs. 
  Beskyttet fra vær, vind og tyveri står syklene trygt plassert i grønne omgivelser.
</p>
<p>
Vi skreddersyr sykkelhotellet etter ditt ønske med bl.a lademuligheter, låsbare skap, lys og varme.
  Planter og habitatløsning.
</p>
 ​<p>
  Vi kan levere sykkel-containeren kledd i tre - noe som bringer naturen inn i urbane omgivelser. 
  Vi organiserer legging av grønne tak. 
  Ved å bringe økosystem med et mangfoldig utvalg av planter til de urbane strøk kan vi forbedre tette byområder. 
  Den ene veggen utgjør en habitatkasse som skaper et hjem for bier, humler og andre insekter.
​</p>
<p>
  Miljø-hensynsfulle bedrifter gir økt tillit og omdømme.
  </p>
  </div>
  </section>
  </>
  );
}
