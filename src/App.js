import './App.css';
import Admin from './components/admin';
import Cliente from './components/cliente';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const testproducts = [
  {img:" ", id:1,nombre:'sol de espuma',precio:50.0,stock:15, descripcion: "something", fecha: new Date().toString()},
  {img:" ", id:2, nombre:'sol de viento',precio:30.0,stock:5, descripcion: "something else", fecha: new Date().toString()},
  {img:" ", id:3, nombre:'sol de sol',precio:80.0,stock:10, descripcion: "something bob", fecha: new Date().toString()}
];

function App() {
  const [user, setUser] = useState('admin');
  const [carrito, setCarrito] = useState({});
  const [venta, setVenta] = useState({});
  const [products, setProducts] = useState(testproducts);

  function addToCarrito(product){
    setCarrito({
      ...carrito,
      [product.id]: {...product, quantity: carrito[product.id] ? carrito[product.id].quantity + 1 : 1}
    })
  }

  function cancelCarrito(product){
    setCarrito({})
  }

  function finalizarCarrito(product){
    setVenta(carrito)
    setCarrito({})
    alert("Compra exitosa")
  } 

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

  console.log(carrito);
  
  return (
    <Container>
      <Button onClick={() => setUser(user === 'admin' ? 'client' : 'admin')} variant="outline-info">Toggle user</Button>
      
      {user === 'admin' &&
      <>
        <h1>Admin</h1>
        <Admin venta={venta} products={products} addProduct={addProduct}/>
      </>
      }
         
      {user === 'client' &&
        <>
        <h1>Client</h1>
        <Cliente finalizarCarrito={finalizarCarrito}
                  cancelCarrito={cancelCarrito}
                  products={products}
                  addToCarrito={addToCarrito}
                  carrito={carrito}/>
        </>
    }
    </Container>
  ); 
}

export default App;
