
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biblio1 from './pages/biblio1';
import LandingPage from './pages/landingPage';
import Biblio2 from './pages/biblio2';
import Vertodos from './pages/vertodos';
import Addbook from './pages/addbook';


function App() {
  return (
    <div>
      <Router>
        <header>
          <Link className="cabezal" to="/"><h4>Biblioteca</h4></Link>
          <Link className="cabezal" to="/vertodos"><h4>Ver todos</h4></Link>
          <Link className="cabezal" to="/addbook"><h4>Añadir libro</h4></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vertodos" element={<Vertodos />} />
            <Route path="/addbook" element={<Addbook/>} />
            <Route path="/biblio1" element={<Biblio1 />} />
            <Route path="/biblio2" element={<Biblio2 />} />
          </Routes>
        </main>
      </Router>
    </div>

  );
}

export default App;
