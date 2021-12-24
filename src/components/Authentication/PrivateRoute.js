import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Session } from "../../contexts/SessionContextProvider";

const PrivateRoute = ({ view: Component }) => {
  const { user } = useContext(Session);
  if (user !== null) return <Component />;
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
