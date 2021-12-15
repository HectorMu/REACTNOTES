import { Navigate } from "react-router-dom";

const UserLogged = ({ view: Component, setUser }) => {
  const user = JSON.parse(window.localStorage.getItem("userSession"));
  if (user !== null) return <Navigate to="/notes" replace={true} />;
  return <Component setUser={setUser} />;
};

export default UserLogged;
