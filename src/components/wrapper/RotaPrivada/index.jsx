import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "@/context/AuthProvider";
import OngAuthContext from "@/context/AuthOngProvider";

const PrivateRoute = ({ userType, allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const { authOng } = useContext(OngAuthContext);

  const isAuthorized = () => {
    if (userType === "adotante") return !!auth.token;
    if (userType === "ong") return !!authOng.token;
    return false;
  };

  if (!isAuthorized()) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(authOng.role)) {
    return <Navigate to="/403" />;
  }

  return <Outlet />;
};

export default PrivateRoute;