import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  
  return (
    <Container>
        <Row>
          <Col md={6} className="signup__form--container">  
        <Form style={{ width: "100%" }}>
            <h1>Crea una cuenta</h1>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Escribe tu nombre" value={name} require onChange= {(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Entra email" value={email} require onChange= {(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Entra tu contraseña" value={password} require onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Y escribe nuevamente la contraseña</Form.Label>
                <Form.Control type="password" placeholder="Escribe nuevamente la Contraseña" value={repeat} require onChange={(e) => setRepeat(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Registrar</Button>
            </Form.Group>
        </Form>
        </Col>
        <Col md={6} className="register__image--container">
         <img
        style={{ width: "80%" , height: "auto", position: "auto" } }
          className="d-block w-100"
          src={'imgs/img_signup.jpg'}
          alt=""
        /></Col> 
        </Row>
    </Container>
    )
}

export default Register