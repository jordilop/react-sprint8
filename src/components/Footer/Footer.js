import "./styles.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaKickstarterK } from "react-icons/fa";


function Footer() {
    return (
        <footer className="nav-footer">
            <div className="nav-social">
                <ul>
                    <li><a href="https://www.facebook.com/StarWars"><FaFacebook /></a></li>
                    <li><a href="https://www.instagram.com/starwars/"><FaInstagram /></a></li>
                    <li><a href="https://www.youtube.com/user/starwars"><FaYoutube /></a></li>
                    <li><a href="https://twitter.com/starwars"><FaTwitter /></a></li>
                    <li><a href="https://starwarskids.com/"><FaKickstarterK /></a></li>
                </ul>
            </div>
            <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
            <div className="footer-nav-links">
                <ul>
                    <li><a href="terms">Terms of Use</a></li>
                    <li><a href="privacy">Privacy Policy</a></li>
                    <li><a href="privacy">Privacy Rights</a></li>
                    <li><a href="shopdisney">Star Wars at shopDisney</a></li>
                    <li><a href="helpdesk">Star Wars Helpdesk</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;