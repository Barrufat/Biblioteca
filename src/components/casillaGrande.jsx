
import './casillaGrande.css'
// import GetLibros from './HttpClient';
import { useState, useEffect } from 'react';
// import CartaLibro from './cartaLibro';

function CasillaGrande(casilla) {

    const [libros, setLibros] = useState([]);
    const URL = "http://localhost:3030/api/libros/" + casilla

    function getLibros() {
        fetch(URL)
            .then(results => results.json())
            .then(results => setLibros(results.data))
            .catch(err => console.log(err))
        console.log(libros)
    }

    useEffect(() => {
        getLibros();
    }, [casilla])

    if (!casilla) return <>...</>;

    return (
        <div className="casillaGrande">
            <h1>{libros.casilla}</h1>
            <ul className="grid">
            {libros.map(libro => (
                    <li key={libro.id} className="card">
                        <h1 className="tituloLibro">{libro.nombre}</h1>
                        <img className="imagenLibro" width="200px" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} />
                        <p>Por {libro.autorx}</p>
                        <p>Generos: {libro.genero}</p>
                        <p>{libro.sinopsis}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CasillaGrande;