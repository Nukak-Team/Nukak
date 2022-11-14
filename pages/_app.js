import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrito from '../components/cliente';


function Navbar () {
        return (
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
                            <Link href='/carrito' type="button" class="btn btn-default navbar-btn">Carrito</Link> 
                        </div>
                </div>
            </nav>
    )
 }

function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
          
         </>
    )
}

export default App;