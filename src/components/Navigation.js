import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isIndex, setIsIndex] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNavLinks = () => {
    if (location.pathname === "/") {
      setIsIndex(true);
    } else {
      setIsIndex(false);
    }
  };
  useEffect(() => {
    handleNavLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
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
          {isIndex ? (
            <div
              className="collapse navbar-collapse ms-auto"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link" href="#howtostart">
                  How to start
                </a>
              </div>
              <div className="navbar-nav">
                <a className="nav-link" href="#about">
                  About
                </a>
              </div>
              <div className="navbar-nav">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          ) : (
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
          )}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle btn-sm"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="far fa-user" />
                  User
                  <small />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="dropdown-item"
                    href="/logout"
                  >
                    Log Out
                    <i className="fas fa-sign-out-alt ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
