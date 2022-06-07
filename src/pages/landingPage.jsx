
import './landingPage.css'
import { BrowserRouter as Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="container">
            <div className="biblio">
                <img src="./biblio1.png" alt="biblio1" />
                <Link to="/biblio1">
                    <img src="./H_biblio1.png" alt="H_biblio1" />
                </Link>
            </div>
            <div className="biblio">
                <img src="./biblio2.png" alt="biblio2" />
                <Link to="/biblio2">
                <img src="./H_biblio2.png" alt="H_biblio2" />
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;