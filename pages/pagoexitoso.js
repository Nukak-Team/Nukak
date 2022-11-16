import React from "react";
import { Container } from "react-bootstrap";

function Pagoexitoso() {
  return (
    <Container style={{ width: "50%" , height: "50%", position: "auto" } } className="ratio ratio-16x9 w-100" >
    <video autoPlay loop muted>
      <source
        src={'imgs/pagoexitosovideo.mp4'}
        type="video/mp4"
       
      />
    </video>
  </Container>
  );
}

export default Pagoexitoso