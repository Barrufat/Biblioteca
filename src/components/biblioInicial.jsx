import './biblioInicial.css'
import { Link } from "react-router-dom";

function BiblioInicial() {
    return (
        <div className="containerbib">
            <div className="biblio1">
                <Link className="biblio" to="/biblio1">
                    <img width='100%' src="./biblio1.png" alt="biblio1" />
                    <img width='100%' src="./H_biblio1.png" alt="H_biblio1" />
                </Link>
            </div>
            <div className="biblio2">
                <Link className="biblio" to="/biblio2">
                    <img width='100%' src="./biblio2.png" alt="biblio2" />
                    <img width='100%' src="./H_biblio2.png" alt="H_biblio2" />
                </Link>
            </div>
        </div>
    )
}

export default BiblioInicial;