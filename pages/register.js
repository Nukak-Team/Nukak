import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  
  return (
    <Container>
        <Form style={{ width: "50%" }}>
            <h1>Crea una cuenta</h1>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Entra email" value={email} require onChange= {(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Entra contraseña" value={password} require onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Escribe nuevamente la contraseña</Form.Label>
                <Form.Control type="password" placeholder="Repite Contraseña" value={repeat} require onChange={(e) => setRepeat(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Registrar</Button>
            </Form.Group>
        </Form>
    </Container>
    )
}

export default Register