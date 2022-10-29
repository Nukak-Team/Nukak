import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";



function Product(props){
    const product = props.data
    const isClient = props.isClient
    // props.data
    // props.somethingElse

    return(
        
   

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" alt="" src="holder.js/100px180" />
        <Card.Body src="">
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>{product.descripcion}
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Text>${product.precio}</Card.Text>
            <Card.Text>stock: {product.stock}</Card.Text>
            {isClient === true
                    ? <Button onClick={()=> props.addToCarrito(product)} variant="primary">Comprar</Button>
                    : null
                    }
            
        </Card.Body>
       
        </Card>
        
    )
}

function ListaProductos (props){
    const products = props.products.map(product => <Product data={product} addToCarrito={props.addToCarrito} isClient={props.isClient} />) 
    
    return (
       <div className="d-flex justify-content-around">
            {products}
            <br/>
        </div>
    )
  }
  
export default ListaProductos;