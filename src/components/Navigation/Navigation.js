import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Session } from "../../contexts/SessionContextProvider";
import LoggedLinks from "./LoggedLinks";
import NotLoggedLinks from "./NotLoggedLinks";

const Navigation = () => {
  const { user, setUser } = useContext(Session);
  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(userData);
  }, [setUser]);
  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-custom-1">
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
