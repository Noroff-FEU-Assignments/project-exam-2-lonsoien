import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Fafo from '../../images/projects/Fafo.jpg';
import Kringsjå from '../../images/projects/Kringsjå.jpg'; 
import Nexans from '../../images/projects/nexans.jpg'; 

function CarouselProjects() {
    return (
        <>
        <h3>Våre Prosjekter</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Fafo}
              alt="Fafo First slide"
            />
            <Carousel.Caption>
              <h3>Fafo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Kringsjå}
              alt="Kringsjå Second slide"
            />
    
            <Carousel.Caption>
              <h3>Kringsjå Skole</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Nexans}
              alt="Nexans Third slide"
            />
    
            <Carousel.Caption>
              <h3>Nexans</h3>
              <p>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </>
    );
}

export default CarouselProjects; 