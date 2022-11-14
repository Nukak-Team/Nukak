import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Clientepage() {
  return (
    <Carousel>
        <Carousel.Item>
        <Carousel.Caption>
        <h1><Badge pill bg="warning" text="dark">NEW</Badge></h1>
        <h2><Badge pill bg="light" text="dark">LAS HERRAMIENTAS QUE NECESITAS ESTÁN AQUÍ</Badge></h2>
        </Carousel.Caption>
        <img 
        style={{ width: "80%" , height: "auto", position: "auto" } }
          className="d-block w-100"
          src={'imgs/img1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
         style={{ width: "80%" , height: "auto", position: "auto" } }
          className="d-block w-100"
          src={'imgs/img2.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1><Badge pill bg="warning" text="dark">NUEVOS PRODUCTOS</Badge></h1>
          <h1> ¡Ya están aquí!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
        style={{ width: "80%" , height: "auto", position: "auto" } }
          className="d-block w-100"
          src={'imgs/img3.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1><Badge pill bg="warning" text="dark">Renuava con confianza</Badge></h1>
        <h2><Badge pill bg="light" text="dark">Tenemos todo para tu casa se vea como nueva</Badge></h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

export default Clientepage;


 //  <Carousel class="index-MastHead-module--cls2--OdHF- index-MastHead-module--cls1--37xum mb-4">