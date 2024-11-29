import { useCallback } from "react";
import { useLocation, useNavigate, matchRoutes } from "react-router-dom";
import routesConfig from "@/routes/routeConfig";

const useGoBack = (fallback = "/") => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    const canGoBack = location.state?.canGoBack;
    const matchedRoutes = matchRoutes(routesConfig, location.pathname);

    const isValidRoute = matchedRoutes && matchedRoutes.length > 0;

    if (!isValidRoute) {
      console.warn(`Rota inválida: ${location.pathname}. Redirecionando para ${fallback}.`);
      navigate(fallback, { replace: true });
      return;
    }

    if (canGoBack || window.history.length > 1) {
      console.info("Retornando para a página anterior no histórico.");
      navigate(-1);
    } else {
      console.info(`Sem histórico ou estado de navegação. Redirecionando para ${fallback}.`);
      navigate(fallback, { replace: true });
    }
  }, [location, fallback, navigate]);
};

export default useGoBack;