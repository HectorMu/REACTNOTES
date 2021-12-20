import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoggedLinks from "./LoggedLinks";
import NotLoggedLinks from "./NotLoggedLinks";

const Navigation = ({ user, setUser }) => {
  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Node Notes
          </Link>
          {user === null ? (
            <NotLoggedLinks />
          ) : (
            <LoggedLinks setUser={setUser} user={user} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
