import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
    const { auth } = useContext(AuthContext);
    
    if (!auth?.token) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(auth.role)) {
        return <Navigate to="/403" />;
    }

    return <Outlet />;
};

export default PrivateRoute;