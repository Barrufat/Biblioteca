
import './casillaGrande.css'
import GetLibros from './HttpClient';
import { useState, useEffect } from 'react';
import CartaLibro from './cartaLibro';

function CasillaGrande(casilla) {

    const [libros, setLibros] = useState (null)
    useEffect(() => {
        GetLibros(casilla).then((data) => {
            setLibros((data.results));
        });

    }, []);

    if (!casilla) return <>...</>;

    return (
        <div className="casillaGrande">
            <h1>{libros.casilla}</h1>
            <ul className="grid">
                {libros.map((libro) => <CartaLibro key={libro.id} libro={libro} />)}
            </ul>
        </div>
    )
}

export default CasillaGrande;