import { useContext } from "react";
import FormAuth from "../../components/common/FormAuth";
import { useFormContext } from "react-hook-form";
import OngAuthContext from "@/context/AuthOngProvider";

const LoginOng = () => {
  const { login } = useContext(OngAuthContext);
  const methods = useFormContext();

  const handleLogin = async (data) => {
    try {
      await login("ong-user", data);
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
        subtitle="Ong"
        fields={[
          { label: "Email", type: "email", placeholder: "email@exemplo.com", name: "email" },
          { label: "Senha", type: "password", placeholder: "Digite sua senha...", name: "senha" }
        ]}
        onSubmit={handleLogin}
        buttonLabel="Entrar"
        linkForgot={true}
      />
    </div>
  );
};

export default LoginOng;
