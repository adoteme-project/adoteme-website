import { useCallback, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "@/context/AuthProvider";

const useGoBack = (fallback = "/") => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  return useCallback(() => {
    const isAuthenticated = !auth.token;
    const hasHistory = window.history.length > 1;

    if (!isAuthenticated || location.pathname === "/403" || !hasHistory) {
      console.info(`Redirecionando para ${fallback} (usuário não autenticado ou sem histórico válido).`);
      navigate(fallback, { replace: true });
      return;
    }

    console.info("Retornando para a página anterior no histórico.");
    navigate(-1);
  }, [auth.token, fallback, navigate, location.pathname]);
};

export default useGoBack;