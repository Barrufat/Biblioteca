import './postform.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchForm() {
    const url = "http://localhost:3030/api/libros/"
    const [nombre, setNombre] = useState("")
    const [autorx, setAutorx] = useState("")
    const [libros, setLibros] = useState([]);

    function handle1(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setNombre(newdata)
        console.log(newdata)
    }

    function handle2(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setAutorx(newdata)
        console.log(newdata)
    }

    function getLibros1() {
        fetch(url + nombre)
            .then(results => results.json())
            .then(results => setLibros(results.data))
            .catch(err => console.log(err))
        console.log("Libros" + libros)
    }

    function getLibros2() {
        fetch(url + autorx)
            .then(results => results.json())
            .then(results => setLibros(results.data))
            .catch(err => console.log(err))
        console.log("Libros" + libros)
    }

    useEffect(() => {
        getLibros1();
        console.log("Libros" + libros)
    }, [nombre])

    useEffect(() => {
        getLibros2();
        console.log("Libros" + libros)
    }, [autorx])

    

    // function submit(e) {
    //     e.preventDefault();
    //     axios.post(url, {
    //         nombre: data.nombre,
    //         autorx: data.autorx,
    //         genero: data.genero,
    //         sinopsis: data.sinopsis,
    //         imagen: data.imagen,
    //         casilla: data.casilla
    //     })
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    return (
        <div className="formulario">
            <form>
                <input onChange={(e) => handle1(e)} id="nombre" value={data.nombre} placeholder="nombre" type="text"></input>
                <input onChange={(e) => handle2(e)} id="autorx" value={data.autorx} placeholder="autorx" type="text"></input>
            </form>
        </div>
    );
}

export default SearchForm;