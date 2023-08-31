import { Link } from "react-router-dom"

const Administration = () => {
    return (
        <section>
            <h1>Administration</h1>
            <br />
            <p>Les administrateurs et les rédacteurs peuvent se retrouver ici.</p>
            <div className="flexGrow">
                <Link to="/">Accueil</Link>
            </div>
        </section>
    )
}

export default Administration;