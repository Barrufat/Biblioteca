import './cartaLibro.css'
// import { Link } from "react-router-dom";

function CartaLibro (props) {

    return (
        <li className="card">
                <h1 className="titulo">{props.nombre}</h1>
        </li>
        )
}

export default CartaLibro;