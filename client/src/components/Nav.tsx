import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg w-100">
      <div className="container-fluid w-100">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faHouse} id="home-icon" /> Reel-Rankings 🎥
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="d-flex justify-content-center align-items-center list-unstyled">
            <li className="nav-item px-5">
              <Link className="nav-link" to="genres">
                Genres
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link className="nav-link" to="/reelranks">
                My Reel Ranks
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="form-container collapse navbar-collapse" id="navbarNav">
          <form className="form login-form">
            <h3>Login</h3>
            <div className="form-group">
              <label>Username</label>
              <input className="form-input" type="text" name="username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-input" type="password" name="password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
