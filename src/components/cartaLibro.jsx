import './cartaLibro.css'
import { Link } from "react-router-dom";

function CartaLibro (libro) {
    const imgURL = "http://localhost:3030/api/libros/" + libro.img_portada;
    return (
        <li className="card">
            <Link to={"/libros/" + libro.id}>
                <img width={260} className="imgcard" src={imgURL} alt="libro.titulo" />
                <div className="titulolibro">{libro.titulo}</div>
            </Link>
        </li>
        )
}

export default CartaLibro;