import FormAuth from "../../components/common/FormAuth";
import { useContext } from "react";
import AuthContext from "@/context/AuthProvider";

const LoginAdotante = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async (data) => {
    await login("adotante", data);
  };

  return (
    <div className="w-full justify-center items-center flex">
      <FormAuth
        title="Login"
        subtitle="Adotante"
        fields={[
          { label: "Email", type: "email", placeholder: "email@exemplo.com", name: "email" },
          { label: "Senha", type: "password", placeholder: "Digite sua senha...", name: "senha" }
        ]}
        onSubmit={handleLogin}
        buttonLabel="Entrar"
        linkTo="/login/cadastro-adotante"
        linkLabel="Cadastrar"
        linkForgot={true}
      />
    </div>
  );
};

export default LoginAdotante;
