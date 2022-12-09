import './postform.css'
import { useState } from 'react';
import axios from 'axios';

function PostForm() {
    const url = "https://biblioapi2-production.up.railway.app/api/libros"
    const [data, setData] = useState({ nombre: "", autorx: "", genero: "", sinopsis: "", imagen: "", casilla: "" })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
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
    }

    return (
        <div className="formulario">
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="nombre" value={data.nombre} placeholder="nombre" type="text"></input>
                <input onChange={(e) => handle(e)} id="casilla" value={data.casilla} placeholder="casilla" type="text"></input>
                <input onChange={(e) => handle(e)} id="autorx" value={data.autorx} placeholder="autorx" type="text"></input>
                <input onChange={(e) => handle(e)} id="genero" value={data.genero} placeholder="genero" type="text"></input>
                <input onChange={(e) => handle(e)} id="sinopsis" value={data.sinopsis} placeholder="sinopsis" type="text"></input>
                <input onChange={(e) => handle(e)} id="imagen" value={data.imagen} placeholder="imagen" type="text"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;