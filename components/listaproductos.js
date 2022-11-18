import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditModal(props) {
    const product = props.product;
    const [nombre, setNombre] = useState(product.nombre);
    const [description, setDescription] = useState(product.description);
    const [precio, setPrecio] = useState(product.precio);
    const [stock, setStock] = useState(product.stock);
    const [img, setImg] = useState("");

    const save = () => {
        props.editProduct({ id: product.id, nombre, description, precio, stock, img });
        props.handleClose();
    };

    return (
        <Modal show={true} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar producto</Modal.Title>
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
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control value={description} onChange={(ev) => setDescription(ev.target.value)} placeholder="Decripcion" as="textarea" aria-label="With textarea" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Precio $</Form.Label>
                        <Form.Control value={precio} onChange={(ev) => setPrecio(ev.target.value)} type="number" aria-label="Amount (to the nearest dollar)" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control value={stock} onChange={(ev) => setStock(ev.target.value)} type="number" placeholder="Unidades disponibles" aria-label="" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={save}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export function Product(props) {
    console.log("Product/props", props);
    const product = props.data
    const isClient = props.isClient
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return product && (
        <>
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Img variant="top" alt="" src="holder.js/100px180" />
                <Card.Body src="">
                    <Card.Title>{product.nombre}</Card.Title>
                    <Card.Text>{product.description}
                    </Card.Text>
                    <Card.Text>${product.precio}</Card.Text>
                    <Card.Text>stock: {product.stock}</Card.Text>
                    {isClient === true
                        ? <Button onClick={() => props.addToCarrito(product)} variant="warning" size="lg">Comprar</Button>
                        : <Button variant="outline-info" onClick={handleShow}>
                            Editar
                        </Button>
                    }
                </Card.Body>
            </Card>
            {show ? <EditModal handleClose={handleClose} product={product} editProduct={props.editProduct} /> : null}
        </>
    )
}

function ListaProductos(props) {
    const products = props.products.map(product => <Product data={product} editProduct={props.editProduct} addToCarrito={props.addToCarrito} isClient={props.isClient} />)

    return (
        <div className="d-flex justify-content-around">
            {products}
        </div>
    )
}

export default ListaProductos;