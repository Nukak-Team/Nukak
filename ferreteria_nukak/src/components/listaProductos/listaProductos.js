import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './listaProductos.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';


import imagenes from './imagenesPorductos/imagenes';
import datosProductosJson from './datosProductos.json'

const ListaProductos = () => {
  
  const datosProductosJson = JSON.parse(localStorage.getItem("productos"))
  const [datosProductos, setdatosProductos] = useState(datosProductosJson)

  // Modificar usuario
  const modificarUser = (modificarUser) => {
    localStorage.setItem("usuarioModificar",JSON.stringify(modificarUser))
  }

  return(
    <div className={styles.productosContainer}>
      { 
      datosProductos.map(
        (producto,index) => (
          <div key={index} className={styles.productos}>
            <Row xs="auto" md="auto" className="g-4">
                <Col>
                  <Card border="dark" className="mb-2">
                    <Card.Img vertical-align='center' align-items='center' variant="flush" src={imagenes[index]} width='100px' height='100' />
                    <Card.Body>
                      <Card.Title className="text-center">{producto.Referencia}</Card.Title>
                      <Card.Text className="text-center">{producto.Nombre}</Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="text-center">{producto.Marca}</ListGroup.Item>
                      <ListGroup.Item className="text-center">$ {producto.Precio}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button variant="outline-warning" onClick={
                        ()=>{
                          modificarUser(producto)
                          window.location.href="/Modificar"
                        }
                      }>Añadir al carrito</Button>
                    </Card.Body>
                  </Card>
                
            
            {/**<img src={imagenes[index]} alt="" />
            <div>
              <h6 className="u-text u-text-default u-text-1">{producto.Referencia}</h6>
              <h6 className="u-text u-text-default u-text-1">{producto.Marca}</h6>
              <h6 className="u-text u-text-default u-text-1">${producto.Precio}</h6>
            </div>
            <Button variant="outline-warning" onClick={
                ()=>{
                  modificarUser(producto)
                  window.location.href="/Modificar"
                }
              }>Añadir al carrito</Button>
            */}
                </Col>
            </Row>
          </div>
        )
        
      )}
    </div>
  )
}
export default ListaProductos;
