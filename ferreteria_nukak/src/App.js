import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, json } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import { Fragment } from "react";

import datosProductosJson from './components/listaProductos/datosProductos.json'

import Autenticacion from './Autenticacion';
import ListaProductos from './components/listaProductos/listaProductos';
import modificarProductos from './components/listaProductos/modificarProductos';
import ventas from './components/listaProductos/ventas';
import Form from 'react-bootstrap/Form';

function App() {
  
  if (localStorage.getItem("productos")==null){
    localStorage.setItem("productos",JSON.stringify(datosProductosJson))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>Ferreteria Nukak</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Productos">Lista Productos</Nav.Link>
                <Nav.Link href="/Modificar">Modificar Productos</Nav.Link>
                <Nav.Link href="/Ventas">Lista Ventas</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*window.location.href="/ver"*/}

        <Routes>
          <Route path="/Productos" element={Autenticacion(ListaProductos,["USER","ADMIN"])} />
          <Route path="/Modificar" element={Autenticacion(modificarProductos,["ADMIN"])}/>
          <Route path="/Ventas" element={Autenticacion(ventas,["USER","ADMIN"])}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
