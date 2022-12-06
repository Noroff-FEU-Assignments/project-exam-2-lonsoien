
import Heading from '../layout/Heading';
import Carousel from 'react-bootstrap/Carousel';
import Sykkelfolie1 from '../../images/products/Sykkelfolie1.jpg';
import Sykkelfolie2 from '../../images/products/Sykkelfolie2.jpg';
import Sykkelfolie3 from '../../images/products/Sykkelfolie3.jpg'; 
import React, { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} style={{padding: "20px"}}>
      <Carousel.Item>
        <img className=".d-block w-100" style={{height: "700px"}}
          src={Sykkelfolie1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height: "700px"}}
          src={Sykkelfolie2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height: "700px"}}
          src={Sykkelfolie3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default function ContainerFolie() {
  return (
    <>
    <section>
  <Heading title="Sykkelcontainer med Folie" />
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
