import './biblio2.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Biblio2() {

  const [casilla, setCasilla] = useState("/casilla/A0");
  const [libros, setLibros] = useState([]);

  const URL = ("https://biblioapi2-production.up.railway.app/api/libros" + casilla);

  const getLibros = async () => {
    try {
      const response = await axios.get(URL);
      setLibros(response.data);
    } catch (err) {
      setLibros([])
      console.log(err);
    }
  }

  useEffect(() => {
    getLibros();
  }, [casilla])

  function eliminarLibro(e) {
    axios.delete("https://biblioapi2-production.up.railway.app/api/libros" + e.id)
      .then(res => {
        console.log(res.data)
        getLibros();
      })
      .catch(error => {
        console.log(error)
      })
  }

  function CasillaGrande() {

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
      <div className="casillaGrande">
        <h1>{libros.casilla}</h1>
        <ul className="gridBib2">
          {libros.map(libro => (
            <li key={libro.id} className="cardBib">
            <h1 className="tituloLibroBib">{libro.nombre}</h1>
              <img className="imagenLibroBib" src={"./" + (libro.imagen) + ".png"} alt={libro.nombre} onClick={switchText} />
              <h3 className="autorLibroBib">{libro.autorx}</h3>
              <h4 className="generoLibroBib">Generos: {libro.genero}</h4>
              <p className={displayText}>{libro.sinopsis}</p>
              <button className='eliminarLibroBib' onClick={() => eliminarLibro(libro)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="containerBib2">
      <div className="libreria2">
        <div className="biblioPeque">
          <Link className="biblio" to="/biblio1">
            <img  width="260px" src="./biblio1.png" alt="biblio1" />
            <img  width="260px" src="./H_biblio1.png" alt="H_biblio1" />
          </Link>
        </div>
        <div className="columnG">
          <div className="casilla">
            <img className="imagen" src="./G1.png" alt="G1" />
            <img className="imagen" src="./H_G1.png" alt="H_G1" onClick={() => setCasilla("/casilla/G1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./G2.png" alt="G2" />
            <img className="imagen" src="./H_G2.png" alt="H_G2" onClick={() => setCasilla("/casilla/G2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./G3.png" alt="G3" />
            <img className="imagen" src="./H_G3.png" alt="H_G3" onClick={() => setCasilla("/casilla/G3")} />
          </div>
          <img className="casilla" src="./G4.png" alt="G4" />
          <img className="casilla" src="./G5.png" alt="G5" />
        </div>
        <div className="columnH">
          <div className="casilla">
            <img className="imagen" src="./H1.png" alt="H1" />
            <img className="imagen" src="./H_H1.png" alt="H_H1" onClick={() => setCasilla("/casilla/H1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./H2.png" alt="H2" />
            <img className="imagen" src="./H_H2.png" alt="H_H2" onClick={() => setCasilla("/casilla/H2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./H3.png" alt="H3" />
            <img className="imagen" src="./H_H3.png" alt="H_H3" onClick={() => setCasilla("/casilla/H3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./H4.png" alt="H4" />
            <img className="imagen" src="./H_H4.png" alt="H_H4" onClick={() => setCasilla("/casilla/H4")} />
          </div>
          <img className="casilla" src="./H5.png" alt="H5" />
        </div>
        <div className="columnI">
          <div className="casilla">
            <img className="imagen" src="./I1.png" alt="I1" />
            <img className="imagen" src="./H_I1.png" alt="H_I1" onClick={() => setCasilla("/casilla/H1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./I2.png" alt="I2" />
            <img className="imagen" src="./H_I2.png" alt="H_I2" onClick={() => setCasilla("/casilla/H2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./I3.png" alt="I3" />
            <img className="imagen" src="./H_I3.png" alt="H_I3" onClick={() => setCasilla("/casilla/H3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./I4.png" alt="I4" />
            <img className="imagen" src="./H_I4.png" alt="H_I4" onClick={() => setCasilla("/casilla/H4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./I5.png" alt="I5" />
            <img className="imagen" src="./H_I5.png" alt="H_I5" onClick={() => setCasilla("/casilla/H5")} />
          </div>
        </div>
        <div className="columnJ">
          <div className="casilla">
            <img className="imagen" src="./J1.png" alt="J1" />
            <img className="imagen" src="./H_J1.png" alt="H_J1" onClick={() => setCasilla("/casilla/J1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./J2.png" alt="J2" />
            <img className="imagen" src="./H_J2.png" alt="H_J2" onClick={() => setCasilla("/casilla/J2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./J3.png" alt="J3" />
            <img className="imagen" src="./H_J3.png" alt="H_J3" onClick={() => setCasilla("/casilla/J3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./J4.png" alt="J4" />
            <img className="imagen" src="./H_J4.png" alt="H_J4" onClick={() => setCasilla("/casilla/J4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./J5.png" alt="J5" />
            <img className="imagen" src="./H_J5.png" alt="H_J5" onClick={() => setCasilla("/casilla/J5")} />
          </div>
          <img className="casilla" src="./J6.png" alt="J6" />
        </div>
        <div className="columnK">
          <div className="casilla">
            <img className="imagen" src="./K1.png" alt="K1" />
            <img className="imagen" src="./H_K1.png" alt="H_K1" onClick={() => setCasilla("/casilla/K1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./K2.png" alt="K2" />
            <img className="imagen" src="./H_K2.png" alt="H_K2" onClick={() => setCasilla("/casilla/K2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./K3.png" alt="K3" />
            <img className="imagen" src="./H_K3.png" alt="H_K3" onClick={() => setCasilla("/casilla/K3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./K4.png" alt="K4" />
            <img className="imagen" src="./H_K4.png" alt="H_K4" onClick={() => setCasilla("/casilla/K4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./K5.png" alt="K5" />
            <img className="imagen" src="./H_K5.png" alt="H_K5" onClick={() => setCasilla("/casilla/K4")} />
          </div>
        </div>
        <div className="columnL">
          <div className="casilla">
            <img className="imagen" src="./L1.png" alt="L1" />
            <img className="imagen" src="./H_L1.png" alt="H_L1" onClick={() => setCasilla("/casilla/L1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./L2.png" alt="L2" />
            <img className="imagen" src="./H_L2.png" alt="H_L2" onClick={() => setCasilla("/casilla/L2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./L3.png" alt="L3" />
            <img className="imagen" src="./H_L3.png" alt="H_L3" onClick={() => setCasilla("/casilla/L3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./L4.png" alt="L4" />
            <img className="imagen" src="./H_L4.png" alt="H_L4" onClick={() => setCasilla("/casilla/L4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./L5.png" alt="L5" />
            <img className="imagen" src="./H_L5.png" alt="H_L5" onClick={() => setCasilla("/casilla/L5")} />
          </div>
        </div>
        <div className="columnM">
          <div className="casilla">
            <img className="imagen" src="./M1.png" alt="M1" />
            <img className="imagen" src="./H_M1.png" alt="H_M1" onClick={() => setCasilla("/casilla/M1")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./M2.png" alt="M2" />
            <img className="imagen" src="./H_M2.png" alt="H_M2" onClick={() => setCasilla("/casilla/M2")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./M3.png" alt="M3" />
            <img className="imagen" src="./H_M3.png" alt="H_M3" onClick={() => setCasilla("/casilla/M3")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./M4.png" alt="M4" />
            <img className="imagen" src="./H_M4.png" alt="H_M4" onClick={() => setCasilla("/casilla/M4")} />
          </div>
          <div className="casilla">
            <img className="imagen" src="./M5.png" alt="M5" />
            <img className="imagen" src="./H_M5.png" alt="H_M5" onClick={() => setCasilla("/casilla/M5")} />
          </div>
        </div>
        <div className="columnLast">
          <CasillaGrande />
        </div>
      </div>
    </div>
  );
}

export default Biblio2;