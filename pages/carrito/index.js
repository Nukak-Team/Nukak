import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import PaymentModal from './payment-modal';

export function Carrito(props) {
  const total = Object.keys(props.carrito).map(k => {
    const product = props.carrito[k];
    return product.precio * product.quantity;
    }).reduce((prev, next) => prev + next, 0);
    const [showPaymentModal, setShowPaymentModal] = React.useState(false);

  return (
    <>
        <Container>
            <Row>
                <Col md={6} className="checkout__image--container">
                        <img
                            style={{ width: "50%" , height: "auto", position: "auto" } }
                            className="d-block w-100"
                            src={'imgs/img_checkout.jpg'}
                            alt="" />
                        </Col> 
                <Col md={6} className="checkout__form--container"> 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th col span="2">Imagen</th>
                            <th col span="2">Cantidad</th>
                            <th col span="2">Producto</th>
                            <th col span="2">Valor</th>
                            <th col span="2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(props.carrito).map(k => {
                            const product = props.carrito[k];
                            return (
                                <tr>
                                    <td col span="2">
                                        <img src="" alt=" "/>{product.img}
                                    </td>
                                    <td col span="2">
                                            {product.quantity}
                                    </td>
                                    <td col span="2">
                                        {product.nombre}
                                    </td>
                                    <td col span="2">
                                        {product.precio} 
                                    </td>
                                    <td col span="2">
                                        ${product.precio * product.quantity}
                                    </td>
                                    </tr>
                                    )})}
                        
                                </tbody>    
                                <tfoot>
                                <tr>      
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th col span="2">Total a pagar</th>
                                    <th col span="2">${total}</th>     
                                </tr>
                            </tfoot>
                    </Table>
                    <Button className='mx-2' onClick={() => setShowPaymentModal(true)} variant="primary">Finalizar Compra</Button>
                    <Button onClick={props.cancelCarrito} variant="secondary">Cancelar</Button>
                </Col>
            </Row>
        </Container>
        { showPaymentModal && 
            <PaymentModal onClose={() => setShowPaymentModal(false)} finalizarCarrito={props.finalizarCarrito} />
        }
    </>
  );
}

export default Carrito;