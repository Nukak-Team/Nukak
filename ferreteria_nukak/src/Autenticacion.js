import { useState, Fragment } from "react"


const Autenticacion = (ComponenteValidar, RolesPermitidos) => {
    const [usuario,setUsuario] = useState({idUsuario:"1234",role:"USER"})
    return(
        <>
        {
            RolesPermitidos.includes(usuario.role) ? <ComponenteValidar/> : <h1>Pagina no permitida</h1>
        }
        </>
    )
}

export default Autenticacion