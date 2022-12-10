
import Heading from '../layout/Heading';
import Carousel from 'react-bootstrap/Carousel';
import Sykkelcontainer2 from '../../images/products/Sykkelcontainer2.jpg';
import Sykkelcontainer4 from '../../images/products/Sykkelcontainer4.jpg';
import React, { useState } from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect} style={{padding: "20px"}}>
      <Carousel.Item>
        <img className="d-block w-100"
          src={Sykkelcontainer2}
          alt="Trepanel first slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100"
          src={Sykkelcontainer4}
          alt="Trepanel second slide"
        />
        </Carousel.Item>
    </Carousel>
  );
}


export default function ContainerTrepanel() {
  return (
    <>
    <section>
  <Heading title="Sykkelcontainer med Trepanel" />
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
  <p>Mobil
    <br></br>
    Containere er mobile, de leveres med lastebil fra våre lokaler og de plasseres ved hjelp av kranbil. 
    På denne måten kan både parkeringsplasser og tomter som ellers ikke er i bruk utnyttes. 
    Containere er fleksible da de kan omplasseres dersom tomten skal brukes til noe annet.
    </p>
    <p>
    Dør/låssystem
    <br></br>
    Container leveres med innbruddsikrede ståldører. 
    Dørlukkere leveres automatisk om ønskelig, og vi har flere låssystemer å velge blant; sylinderlås, kodelås, elektronisk lås m.fl.
    </p>
    <p>
    Innredning
    <br></br>
    Container er utrustet med sykkelstativ festet til gulv/vegg slik at sykkelen, om ønskelig, kan låses fast med egen sykkellås. 
    Kan leveres med ladestasjoner for el-sykler.
    </p>
    <p>
    Grønne tak
    <br></br>
    Containere som utstyres med grønne tak av sedum eller viltvoksende gress og blomster, gir en spennende kombinasjon av industri og natur. 
    Grønne tak i urbane områder kan bli verdifullt for bevaring av bl.a. bier og humler. Foruten biologiske fordeler virker også grønne tak slik at det forsinker avrenning ved ekstremnedbør. 
    Generelt bidrar grønne tak til å rense luften og øke trivselen i urbane strøk.
    </p>
    <p>
    Vernede bedrifter
    <br></br>
    Vi samarbeider med bedrifter som tilbyr arbeidstrening og opplæring. 
    Med dette som verdigrunnlag utvikler og produserer vi produkter som gjenspeiler kreativitet, kvalitet, mangfold og mestringsglede.
    </p>
  </div>
  </section>
  </>
  );
}