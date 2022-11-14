import React from "react";
import ListaProductos from "./listaproductos";

import {Tabs, Tab} from 'react-bootstrap';
 
function Cliente(props){
    return(
        <>
            <img className="d-block w-100" src='imgs/img_message2.jpg' alt="" />
            <Tabs>
                <Tab eventKey="lista-productos" title="Nuestros Productos"><br/>
                    <ListaProductos products={props.products} addToCarrito={props.addToCarrito} isClient />
                </Tab>
            </Tabs>
        </>
    )
}

export default Cliente;