import { Navigate } from "react-router-dom";

const PrivateRoute = ({ view: Component, setUser }) => {
  const user = JSON.parse(window.localStorage.getItem("userSession"));
  if (user !== null) return <Component user={user} setUser={setUser} />;
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
