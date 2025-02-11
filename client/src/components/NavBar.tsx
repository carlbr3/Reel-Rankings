import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-md border-bottom-custom navbar-custom" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-item raleway-nav" to="/">
                    <FontAwesomeIcon icon={faHouse} id="home-icon" />  Brandon Carlson/About Me
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/Resume">Resume</Link>
                        </li>
                        <li className="nav-item px-4 raleway-nav">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='d-flex justify-content-end'>
                    <a href="https://github.com/carlbr3" className="nav-link" id="github-icon">
                        <img src="/assets/img/github avatar.png" alt="GitHub" width="50" height="50" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
