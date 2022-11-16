import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
              <Row>
                <Col md={6} className="login__form--container"> 
                <Form style={{ height: "100%" }} action="/login" method="post">
                      <h1>Inicia Sesión</h1>
                      <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Escribe tu email" value={email} require onChange= {(e) => setEmail(e.target.value)}/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                      <Form.Label>Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Escribe tu contraseña" value={password} require onChange={(e) => setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group>
                      <Button  type="submit">Ingresar</Button>
                      </Form.Group>
                      <p className="pt-3 text-center">¿Aún no tienes una cuenta? <a href="/register">¡Create una ya!</a></p>
                  </Form>
                  </Col>
                <Col md={6} className="login__image--container">
                  <img
                    style={{ width: "80%" , height: "auto", position: "auto" } }
                    className="d-block w-100"
                    src={'imgs/img_login1.jpg'}
                    alt="" />
                </Col> 
            </Row>
    </Container>   
  );
}

export default Login;