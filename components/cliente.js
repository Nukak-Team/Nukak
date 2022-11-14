import React from "react";
import ListaProductos from "./listaproductos";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Tabs, Tab} from 'react-bootstrap';

function Carrito(props){
    const total = Object.keys(props.carrito).map(k => {
        const product = props.carrito[k];
        return product.precio * product.quantity;
    }).reduce((prev, next) => prev + next, 0);

    return( 
    <>
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
        <Button onClick={props.finalizarCarrito} variant="primary">Finalizar Compra</Button>
        <Button onClick={props.cancelCarrito} variant="secondary">Cancelar</Button>
    </>
    )
}
 
function Cliente(props){
    return(
        <>
            <img className="d-block w-100" src='imgs/img_message2.jpg' alt="" />
            <Tabs>
                <Tab eventKey="lista-productos" title="Nuestros Productos"><br/>
                    <ListaProductos products={props.products} addToCarrito={props.addToCarrito} isClient />
                </Tab>
                <Tab eventKey="carrito" title="Carrito">
                    <Carrito finalizarCarrito={props.finalizarCarrito} cancelCarrito={props.cancelCarrito} carrito={props.carrito} />
                </Tab>
            </Tabs>
        </>
    )
}

export default Cliente;