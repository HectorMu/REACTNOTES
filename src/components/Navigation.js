import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isIndex, setIsIndex] = useState(false);
  let location = useLocation();

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
              <Link to="/profile" className="btn btn-primary btn-sm">
                user
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
