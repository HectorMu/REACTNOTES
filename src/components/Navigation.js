import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Navigation = ({ user, setUser }) => {
  const [isIndex, setIsIndex] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    logout();
    navigate("/login");
  };

  const handleNavLinks = () => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setIsIndex(false);
    } else {
      setIsIndex(true);
    }
  };
  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          {user === null ? (
            <>
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
                {isIndex ? (
                  <>
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
                  </>
                ) : null}
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="d-flex  flex-lg-row flex-xl-row flex-column align-items-center">
                  <div className="navbar-nav">
                    <Link
                      to="/signup"
                      className="btn btn-primary  btn-sm rounded-pill "
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className="navbar-nav">
                    <Link to="/login" className="nav-link">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle btn-sm"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-user" /> {user.firstname}
                      <small />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                      <button onClick={handleLogOut} className="dropdown-item">
                        <i className="fas fa-sign-out-alt ml-2" /> Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
