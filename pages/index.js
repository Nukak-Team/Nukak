import Admin from '../components/admin';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import {Button, Navbar} from 'react-bootstrap';
import Client from '../pages/client';

const testproducts = [
  {img:" ", id:1,nombre:'sol de espuma',precio:50.0,stock:15, description: "something", fecha: new Date().toString()},
  {img:" ", id:2, nombre:'sol de viento',precio:30.0,stock:5, description: "something else", fecha: new Date().toString()},
  {img:" ", id:3, nombre:'sol de sol',precio:80.0,stock:10, description: "something bob", fecha: new Date().toString()}
];

function Main(props) {
  const [user, setUser] = useState('admin');
  const [products, setProducts] = useState(testproducts);

  function addProduct({description='default descripcion', precio , nombre='new product', img='img', stock} = {}) {
     const newProduct = {
      img,
      id: products.length + 1,
      nombre,
      precio,
      stock,
      description,
      fecha: new Date().toString()
    };

    setProducts(products.concat(newProduct))
  }

  function editProduct({id, description, precio , nombre, img, stock}) {
    const updatedProducts = products.filter(product => product.id !== id);
    const updatedProduct = {id, description, precio, nombre, img, stock};

    setProducts(updatedProducts.concat(updatedProduct))
 }

  return (
    <Container>
      <Button onClick={() => setUser(user === 'admin' ? 'client' : 'admin')} variant="outline-info">Toggle user</Button>
      <Navbar />
      {user === 'admin' && <Admin venta={props.venta} products={products} addProduct={addProduct} editProduct={editProduct} /> }
         
      {user === 'client' && (
        <Client products={products} addToCarrito={props.addToCarrito} carrito={props.carrito}/>
      )}
    </Container>
  ); 
}

export default Main;
