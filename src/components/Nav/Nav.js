import "./styles.css"
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-starwars.png"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaKickstarterK, FaRegUser, FaUser, FaShareSquare } from "react-icons/fa";
import { useMyContext } from "../../context/Provider";

function Nav(props) {
    const [username, setUsername] = useMyContext();

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
                    <Link to={process.env.PUBLIC_URL}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                {
                    props.isAutheticated ?
                        <div className="nav-login">
                            Hello {username}!
                            <Link to={process.env.PUBLIC_URL} onClick={() => {
                                props.setIsAutheticated(false);
                                setUsername("");
                            }}>
                                <span className="nav-login-text">LOGOUT</span>
                                <FaShareSquare />
                            </Link>
                        </div>
                        :
                        <div className="nav-login">
                            <Link to={process.env.PUBLIC_URL + '/login'}>
                                <FaRegUser />
                                <span className="nav-login-text">LOGIN</span>
                            </Link>
                            <Link to={process.env.PUBLIC_URL + '/signup'}>
                                <FaUser />
                                <span className="nav-login-text">SIGN UP</span>
                            </Link>
                        </div>
                }

            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <Link to={process.env.PUBLIC_URL}>HOME</Link>
                    <Link to={process.env.PUBLIC_URL + '/starships'}>STARSHIPS</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;