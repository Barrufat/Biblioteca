import './postform.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchForm() {
    const url1 = "https://biblioapi2-production.up.railway.app/api/libros/nombre/"
    const url2 = "https://biblioapi2-production.up.railway.app/api/libros/autorx/"
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

    const getLibros1 = async () => {
        try {
            const response = await axios.get(url1 + nombre);
            setLibros(response.data);
            console.log("Libros" + libros)
        } catch (err) {
            setLibros([])
            console.log(err);
        }
    }

    const getLibros2 = async () => {
        try {
            const response = await axios.get(url2 + autorx);
            setLibros(response.data);
            console.log("Libros" + libros)
        } catch (err) {
            setLibros([])
            console.log(err);
        }
    }

    useEffect(() => {
        getLibros1();
        console.log("Libros" + libros)
    }, [nombre])

    useEffect(() => {
        getLibros2();
        console.log("Libros" + libros)
    }, [autorx])

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