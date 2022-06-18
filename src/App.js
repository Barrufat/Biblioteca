
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biblio1 from './pages/biblio1';
import LandingPage from './pages/landingPage';
import Biblio2 from './pages/biblio2';
import Vertodos from './pages/vertodos';



function App() {
  return (
    <div className="contprincipal">
      <Router>
        <header>
          <Link to="/"><h1 className="tituloprincipal">Biblioteca</h1></Link>
          <Link className="biblio" to="/vertodos"><h1>Ver todos</h1></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vertodos" element={<Vertodos />} />
            <Route path="/biblio1" element={<Biblio1 />} />
            <Route path="/biblio2" element={<Biblio2 />} />
          </Routes>
        </main>
      </Router>
    </div>

  );
}

export default App;
