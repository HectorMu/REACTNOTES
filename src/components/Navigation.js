import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Node Notes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ms-auto"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/notes" className="nav-link">
                My notes
              </Link>
            </div>
            <div className="navbar-nav">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/profile" className="btn btn-primary btn-sm">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
