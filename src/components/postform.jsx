import './postform.css'
import { useState } from 'react';
import axios from 'axios';

function PostForm() {
    const url = "https://biblioapi2-production.up.railway.app/api/libros"
    const [data, setData] = useState({ nombre: "", autorx: "", genero: "", sinopsis: "", imagen: "", casilla: "" })
    const [displayMessage, setDisplayMessage] = useState ('closed');
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        setDisplayMessage('closed')
    }

    async function submit(e) {
        e.preventDefault();
        await axios.post(url, {
            nombre: data.nombre,
            autorx: data.autorx,
            genero: data.genero,
            sinopsis: data.sinopsis,
            imagen: data.imagen,
            casilla: data.casilla
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })

            setData({ nombre: "", autorx: "", genero: "", sinopsis: "", imagen: "", casilla: "" });
            setDisplayMessage('openMessage');
    }

    return (
            <form className="formularioPost" onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="nombre" value={data.nombre} placeholder="Nombre" type="text"></input>
                <input onChange={(e) => handle(e)} id="casilla" value={data.casilla} placeholder="Casilla" type="text"></input>
                <input onChange={(e) => handle(e)} id="autorx" value={data.autorx} placeholder="Autorx" type="text"></input>
                <input onChange={(e) => handle(e)} id="genero" value={data.genero} placeholder="Genero" type="text"></input>
                <input onChange={(e) => handle(e)} id="sinopsis" value={data.sinopsis} placeholder="Sinopsis" type="text"></input>
                <input onChange={(e) => handle(e)} id="imagen" value={data.imagen} placeholder="Imagen" type="text"></input>
                
                <button className='nuevoLibro' type="submit">Añadir libro</button>
                <p className={displayMessage}> Libro añadido a biblioteca!</p>
            </form>
    );
}

export default PostForm;