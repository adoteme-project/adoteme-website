import OngAuthContext from "@/context/AuthOngProvider";
import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ userType, allowedRoles }) => {
    const { auth } = useContext(AuthContext);
    const { authOng } = useContext(OngAuthContext);

    const isAuthorized = () => {
        if (userType === "adotante") return !! auth.token;
        if (userType === "ong") return !! authOng.token;
        return false;
    }

    console.log(authOng.role);

    if (allowedRoles && !allowedRoles.includes(authOng.role)) {
        return <Navigate to="/403" />;
    }

    return  isAuthorized() ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;