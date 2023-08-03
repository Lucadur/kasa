import { Link } from "react-router-dom"
import "../../src/styles/404.css"

function Error404 () {
    return (
        <div className="error-container"> 
            <h1 className="error-title">404</h1>
            <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`} className="error-link">Retour à la page d'accueil </Link>
            </div>
        )
}

export default Error404