import "./styles.css"
import { Link } from "react-router-dom";
import logo from "../../img/logo-starwars.png"

function Nav() {
    return (
        <header className="nav-header">
            <img src={logo} className="nav-logo" alt="logo" />
            <div className="navbar">
                <ul className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/starships">STARSHIPS</Link>
                </ul>
            </div>
        </header>
    );
}

export default Nav;