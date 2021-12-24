import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Session } from "../../contexts/SessionContextProvider";

const UserLogged = ({ view: Component }) => {
  const { user } = useContext(Session);
  //const user = JSON.parse(window.localStorage.getItem("userSession"));
  if (user !== null) return <Navigate to="/notes" replace={true} />;
  return <Component />;
};

export default UserLogged;
