
// import CartaLibro from '../components/cartaLibro';
import { useEffect, useState } from 'react';
import './vertodos.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Vertodos() {
    const [libros, setLibros] = useState([]);
    const [searchText, setSearchTExt] = useState("");
    const [searchText2, setSearchTExt2] = useState("");
    const [buscar, setBuscar] = useState("");
    // const navigate = useNavigate ();

    function getLibros() {
        fetch("http://localhost:3030/api/libros/" + buscar)
            .then(results => results.json())
            .then(results => setLibros(results.data))
            .catch(err => console.log(err))
        console.log("Libros" + libros)
    }

    useEffect(() => {
        getLibros();
        console.log("Libros" + libros);
        console.log(buscar);
    }, [buscar])


    const handleSubmit = (e) => {
        e.preventDefault();
        setBuscar("nombre/" + searchText);
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setBuscar("casilla/" + searchText2);
    }

    // function getLibros1() {
    //     fetch(url + "/nombre/" + value)
    //         .then(results => results.json())
    //         .then(results => setLibros(results.data))
    //         .catch(err => console.log(err))
    //     console.log("Libros" + libros)
    // }

    // useEffect(() => {
    //     getLibros1();
    //     console.log("Libros" + libros)
    // }, [value])

    // const [libros, setLibros] = useState([]);
    // {"./uploads/"+(libro.imagen)+".png"}

    function eliminarLibro(e) {
        axios.delete("http://localhost:3030/api/libros/" + e.id)
            .then(res => {
                console.log(res.data)
                getLibros();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <input className="input2"
                        placeholder=" Buscar por nombre"
                        type="text" value={searchText}
                        onChange={(e) => setSearchTExt(e.target.value)}></input>
                    <button className="buscarButton" type="submit">Buscar</button>
                </form>
                <br/>
                <form onSubmit={handleSubmit2}>
                <input className="input2"
                    placeholder=" Buscar por casilla"
                    type="text" value={searchText2}
                    onChange={(e) => setSearchTExt2(e.target.value)}></input>
                <button className="buscarButton" type="submit">Buscar</button>
                </form>
            </div>
            <ul className="grid">
                {libros.map(libro => (
                    <li key={libro.id} className="card">
                        <h1 className="tituloLibro">{libro.nombre}</h1>
                        <img className="imagenLibro" width="200px" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} />
                        <p>Casilla: {libro.casilla}</p>
                        <p>Por {libro.autorx}</p>
                        <p>Generos: {libro.genero}</p>
                        <p>{libro.sinopsis}</p>
                        <button onClick={() => eliminarLibro(libro)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Vertodos;