import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import {Col, Row} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function PaymentModal({finalizarCarrito, onClose}) {
    const router = useRouter();
   
    const onSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        finalizarCarrito();
        router.push('/pagoexitoso');
    };

    return (
        <Modal show onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Procesamiento de pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Mario"
                            defaultValue=""
                        />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Osorio"
                                defaultValue=""/>
                            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} md="7" controlId="validationCustom01">
                            <Form.Label>Tarjeta de Credito</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="4242 4242 4242 4242"
                                defaultValue=""/>
                            <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                            </Form.Group>
                        <Form.Group as={Col} md="10" controlId="validationFormik05">
                        <h6><Form.Label style={{margin:"2px"}}>Dirección de entrega</Form.Label></h6>
                            <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  placeholder="Dirección ej: calle 1 Nª 1-2"
                                  aria-describedby="inputGroupPrepend"
                                  required
                                />
                                <Form.Control.Feedback type="invalid">
                                Por favor escribe tu dirección
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" placeholder="Cali" required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, indicanos la ciudad de entrega.
                                </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                    <Form.Label>Departamento</Form.Label>
                                    <Form.Control type="text" placeholder="Valle del cauca" required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, indicanos el departamento dónde entregaremos tu pedido.
                                    </Form.Control.Feedback>
                            </Form.Group>
                       </Row>
                        <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Pagar ahora
                        </Button>
                        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                    </Form>
            </Modal.Body>
        </Modal>
    )
}