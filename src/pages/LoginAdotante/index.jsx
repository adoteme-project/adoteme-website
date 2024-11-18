import FormAuth from "../../components/common/FormAuth";
import { useContext } from "react";
import AuthContext from "@/context/AuthProvider";
import { useFormContext } from "react-hook-form";

const LoginAdotante = () => {
  const { login } = useContext(AuthContext);
  const methods = useFormContext();

  const handleLogin = async (data) => {
    try {
      await login("adotante", data);
    } catch (e) {
      methods.setError("senha", {
        type: "manual",
        message: e || "Erro no login",
      });
    }
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