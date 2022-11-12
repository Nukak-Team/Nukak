import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Container>
        <Form style={{ width: "50%" }}>
            <h1>Login to your account</h1>
            <Form.Group>
                <Form.Label> Email Address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} require onChange= {(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} require onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Login</Button>
            </Form.Group>
            <p className="pt-3 text-center">Don't you have an account? <a href="/register">Create account</a></p>
        </Form>
    </Container>
    )
}

export default Login;