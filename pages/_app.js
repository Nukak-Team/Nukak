import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import register from './register';

function Navbar () {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link class="navbar-brand" href="/" rel="icon" type="image/x-icon">Home</Link>
                            <img alt="Brand" src="..."/>
                        </div>
                        <div>
                            <Link href='/login' type="button" class="btn btn-default navbar-btn">Login</Link>
                            <Link href='/register' type="button" class="btn btn-default navbar-btn">Register</Link> 
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
            <register/>
         </>
    )
}

export default App;

