import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-md border-bottom-custom navbar-custom" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-item raleway-nav" to="/">
                    <FontAwesomeIcon icon={faHouse} id="home-icon" />  Reel-Rankings 🎥
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/Genres">Genres</Link>
                        </li>
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/My Reel Ranks">My Reel Ranks</Link>
                        </li>
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/Profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
