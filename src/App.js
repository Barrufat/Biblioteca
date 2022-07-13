
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biblio1 from './pages/biblio1';
import LandingPage from './pages/landingPage';
import Biblio2 from './pages/biblio2';
import Vertodos from './pages/vertodos';
import LibrosCasilla from './pages/librosCasilla';
import Addbook from './pages/addbook';


function App() {
  return (
    <div className="contprincipal">
      <Router>
        <header>
          <Link className="cabezal" to="/"><h1 >Biblioteca</h1></Link>
          <Link className="cabezal" to="/vertodos"><h1 >Ver todos</h1></Link>
          <Link className="cabezal" to="/addbook"><h1 >Añadir libro</h1></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vertodos" element={<Vertodos />} />
            <Route path="/addbook" element={<Addbook/>} />
            <Route path="/biblio1" element={<Biblio1 />} />
            <Route path="/biblio2" element={<Biblio2 />} />
            <Route path="/librosCasilla" element={<LibrosCasilla />} />
          </Routes>
        </main>
      </Router>
    </div>

  );
}

export default App;
