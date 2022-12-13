
import { useEffect, useState } from 'react';
import './vertodos.css'
import axios from 'axios';


function Vertodos() {
    const [libros, setLibros] = useState([]);
    const [searchText, setSearchTExt] = useState("");
    const [searchText2, setSearchTExt2] = useState("");
    const [buscar, setBuscar] = useState("");

    const getLibros = async () => {
        try {
            const response = await axios.get("https://biblioapi2-production.up.railway.app/api/libros" + buscar);
            setLibros(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLibros();
    }, [])

    useEffect(() => {
        console.log('Libros: ' + JSON.stringify(libros));
    }, [libros])


    const handleSubmit = (e) => {
        e.preventDefault();
        setBuscar("nombre/" + searchText);
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setBuscar("casilla/" + searchText2);
    }

    function eliminarLibro(e) {
        axios.delete("https://biblioapi2-production.up.railway.app/api/libros/" + e.id)
            .then(res => {
                console.log(res.data)
                getLibros();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [displayText, setDisplayText] = useState ('textoClosed');
    const [toggleText, setToggleText] = useState (false);

    const switchText = () => {
      setToggleText(!toggleText)
    }

    useEffect(() => {
      if(toggleText){
        setDisplayText("textoLibroBib")
      } else {
        setDisplayText('textoClosed')
      }
    }, [toggleText])

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
                <br />
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
                        <img className="imagenLibro" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} onClick={switchText} />
                        <h3 className="autorLibro">{libro.autorx}</h3>
                        <h4 className="generoLibro">Generos: {libro.genero}</h4>
                        <p className={displayText}>{libro.sinopsis}</p>
                        <button className='eliminarLibro' onClick={() => eliminarLibro(libro)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Vertodos;