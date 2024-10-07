import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { auth } = useContext(AuthContext);
    
    return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;