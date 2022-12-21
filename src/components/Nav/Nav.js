import "./styles.css"
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-starwars.png"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaKickstarterK, FaRegUser, FaUser, FaShareSquare } from "react-icons/fa";

function Nav(props) {
    return (
        <header className="nav-header">
            <div className="nav-menu">
                <div className="nav-icons">
                    <ul>
                        <li><a href="https://www.facebook.com/StarWars"><FaFacebook /></a></li>
                        <li><a href="https://www.instagram.com/starwars/"><FaInstagram /></a></li>
                        <li><a href="https://www.youtube.com/user/starwars"><FaYoutube /></a></li>
                        <li><a href="https://twitter.com/starwars"><FaTwitter /></a></li>
                        <li><a href="https://starwarskids.com/"><FaKickstarterK /></a></li>
                    </ul>
                </div>
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {
                    props.isAutheticated ?
                        <div className="nav-login">
                            Hello XXXX!
                            <Link to="/" onClick={() => props.setIsAutheticated(false)}>
                                <span className="nav-login-text">LOGOUT</span>
                                <FaShareSquare />
                            </Link>
                        </div>
                        :
                        <div className="nav-login">
                            <Link to="/login">
                                <FaRegUser />
                                <span className="nav-login-text">LOGIN</span>
                            </Link>
                            <Link to="/signup">
                                <FaUser />
                                <span className="nav-login-text">SIGN UP</span>
                            </Link>
                        </div>
                }

            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/starships">STARSHIPS</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;