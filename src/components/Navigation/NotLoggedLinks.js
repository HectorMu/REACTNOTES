import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import IndexLinks from "./IndexLinks";

const NotLoggedLinks = () => {
  let location = useLocation();
  const [isIndex, setIsIndex] = useState(false);
  const handleNavLinks = () => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/recover"
    ) {
      setIsIndex(false);
    } else {
      setIsIndex(true);
    }
  };
  useEffect(() => {
    handleNavLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
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
      <div className="collapse navbar-collapse ms-auto" id="navbarNavAltMarkup">
        {isIndex ? <IndexLinks /> : null}
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="d-flex  flex-lg-row flex-xl-row flex-column align-items-center">
          <div className="navbar-nav">
            <Link
              to="/signup"
              className="btn btn-primary  btn-sm rounded-pill fw-bold fs-6 "
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
  );
};

export default NotLoggedLinks;
