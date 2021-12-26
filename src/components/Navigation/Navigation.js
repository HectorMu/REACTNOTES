import { useEffect, useContext, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Session } from "../../contexts/SessionContextProvider";
import LoggedLinks from "./LoggedLinks";
import NotLoggedLinks from "./NotLoggedLinks";

const Navigation = () => {
  let location = useLocation();

  const [isIndex, setIsIndex] = useState(false);
  const HandleNavFixed = useCallback(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/recover"
    ) {
      setIsIndex(false);
    } else {
      setIsIndex(true);
    }
  }, [location]);

  const { user, setUser } = useContext(Session);
  useEffect(() => {
    HandleNavFixed();
  }, [HandleNavFixed]);
  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userSession"));
    setUser(userData);
  }, [setUser]);
  return (
    <div className="w-100">
      <nav
        className={`navbar navbar-expand-lg  ${
          isIndex === true ? "fixed-top" : ""
        } navbar-dark bg-custom-1`}
      >
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
