import React, { useState } from "react";
import {Product} from "./listaproductos";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function CreateProduct(props) {
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState("");
    const [description, setDescription] = useState("");
    const [precio, setPrecio] = useState(null);
    const [stock, setStock] = useState(1);
    const [img, setImg] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const save = () => {
        props.addProduct({nombre, description, precio, stock, img});
        handleClose();
    };

    return (
        <>
          <Button className="my-3" variant="outline-info" onClick={handleShow}>
            Agregar
          </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control value={img} onChange={(ev) => setImg(ev.target.value)} type="file" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value={nombre} onChange={(ev) => setNombre(ev.target.value)} placeholder="Nombre producto" aria-label="First name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Decripcion</Form.Label>
                            <Form.Control value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="Decripcion" as="textarea" aria-label="With textarea" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Precio $</Form.Label>
                            <Form.Control value={precio} onChange={(ev) => setPrecio(ev.target.value)} type="number" aria-label="Amount (to the nearest dollar)" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>stock</Form.Label>
                            <Form.Control value={stock} onChange={(ev) => setStock(ev.target.value)} type="number" placeholder="Unidades disponibles" aria-label="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
      );
}

function ModificarProductos(props) {
    const [activeProductId, setActiveProductId] = useState(1);
    const activeProduct = props.products.find(product => product.id === activeProductId);

    const products = props.products.map(product => (
        <ListGroup.Item  action
        onClick={() => setActiveProductId(product.id)} variant={product.id === activeProduct.id ? "info" : ""}>{product.nombre}</ListGroup.Item>
    ));
    
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', 'padding': '2rem 0'}}>
            <div>
                <h3>Lista de Productos</h3>
                    <ListGroup>
                        {products}
                        <CreateProduct addProduct={props.addProduct} /> 
                    </ListGroup>
            </div>
            <Product data={activeProduct} editProduct={props.editProduct} />
        </div>
    )
}

function VentaProductos (props) {
    return(
      <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan="2">Fecha</th>
                        <th colSpan="2">idVenta</th>
                        <th colSpan="2">Valor</th>                     
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.venta).map(k => {
                        const product = props.venta[k];
                        return (
                            <tr>    
                                <td colSpan="2">
                                    {product.fecha}
                                </td>
                                <td colSpan="2">
                                    {product.id}
                                </td>
                                <td colSpan="2">
                                    {product.precio} 
                                </td>
                            </tr>
                        )
                    })}
                </tbody>    
        </Table>
    )
}

function Admin(props){
    return (
        <Tabs>
            <Tab eventKey="modificar productos" title="Modificar productos">
                <ModificarProductos products={props.products} addProduct={props.addProduct} editProduct={props.editProduct} />
            </Tab>
            <Tab eventKey="ventas" title="Lista ventas">
                <VentaProductos venta={props.venta} />
            </Tab>
        </Tabs>
    );
}

export default Admin;
