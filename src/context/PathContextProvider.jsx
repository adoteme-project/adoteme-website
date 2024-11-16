import { useLocation } from "react-router-dom";
import { createContext, useContext } from "react";

const PathContext = createContext();

export const ContextPathProvider = ({ children }) => {
  const location = useLocation();
  const contextPath = location.pathname.includes("abrigo") ? "abrigo" : "resgatado";

  return (
    <PathContext.Provider value={contextPath}>
      {children}
    </PathContext.Provider>
  );
};

export const useContextPath = () => {
  return useContext(PathContext);
};
