import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";

const Teste = () => {

  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1> Rota privada acessada </h1>
      <button onClick={logout} className="bg-azul-main p-4 text-branco"> Logout </button>
    </>
  );
};

export default Teste;
