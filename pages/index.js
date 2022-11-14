import Admin from '../components/admin';
import Cliente from '../components/cliente';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import {Button, Navbar} from 'react-bootstrap';
import Clientepage from '../pages/clientpage';

const testproducts = [
  {img:" ", id:1,nombre:'sol de espuma',precio:50.0,stock:15, description: "something", fecha: new Date().toString()},
  {img:" ", id:2, nombre:'sol de viento',precio:30.0,stock:5, description: "something else", fecha: new Date().toString()},
  {img:" ", id:3, nombre:'sol de sol',precio:80.0,stock:10, description: "something bob", fecha: new Date().toString()}
];

function Main({ component, pageProps }) {
  const [user, setUser] = useState('admin');
  const [carrito, setCarrito] = useState({});
  const [venta, setVenta] = useState({});
  const [products, setProducts] = useState(testproducts);

  function addToCarrito(product){
    setCarrito({
      ...carrito,
      [product.id]: {...product, quantity: carrito[product.id] ? carrito[product.id].quantity + 1 : 1},
    })
  }

  function cancelCarrito(){
    setCarrito({})
  }

  function finalizarCarrito() {
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

  function editProduct({id, description, precio , nombre, img, stock}) {
    const updatedProducts = products.filter(product => product.id !== id);
    const updatedProduct = {id, description, precio, nombre, img, stock};

    setProducts(updatedProducts.concat(updatedProduct))
 }
  
  return (
    <Container>
      <Button onClick={() => setUser(user === 'admin' ? 'client' : 'admin')} variant="outline-info">Toggle user</Button>
      <Navbar />
      {user === 'admin' &&
      <>
        <h1>Admin</h1>
        <Admin venta={venta} products={products} addProduct={addProduct} editProduct={editProduct} />
      </>
      }
         
      {user === 'client' &&
        <>
          <h1>Client</h1>
          <Clientepage/>
            <br/>
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

export default Main;
