import React from 'react';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App({ Component, pageProps }) {
    const [carrito, setCarrito] = React.useState({});
    const [venta, setVenta] = React.useState({});

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

    return (
        <>
            <nav class="navbar navbar-default" style={{ height: '150px'}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                            <Link class="navbar-brand" href="/" rel="icon" type="image/x-icon">
                                <img alt="Brand" src={'imgs/icon.jpg'} style={{height:"50px"}}/>
                            </Link>
                        </div>
                        <div>
                            <Link href='/login' type="button" class="btn btn-default navbar-btn">Login</Link>
                            <Link href='/register' type="button" class="btn btn-default navbar-btn">Register</Link> 
                            <Link href='/carrito' type="button" class="btn btn-default navbar-btn">Carrito <Badge pill bg="warning" text="dark">{Object.keys(carrito).length}</Badge></Link> 
                        </div>
                </div>
            </nav>
            <Component {...pageProps} venta={venta} addToCarrito={addToCarrito} finalizarCarrito={finalizarCarrito} cancelCarrito={cancelCarrito} carrito={carrito} venta={venta}/>
            <footer className="p-5"></footer>
         </>
    )
}

export default App;