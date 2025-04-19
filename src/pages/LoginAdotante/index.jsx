import FormAuth from "../../components/common/FormAuth";
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthProvider";
import { useFormContext } from "react-hook-form";
import ModalLoginFa from "@/components/common/ModalLoginFa";
import useModal from "@/hooks/useModal";

const LoginAdotante = () => {
  const { login, loginWithOtp} = useContext(AuthContext);
  const methods = useFormContext();
  const [isShowing, toggleModal] = useModal();
  const [email, setEmail] = useState();

  const handleLogin = async (data) => {
    try {
      await login("adotante", data, toggleModal);
      setEmail(data.email);
    } catch (e) {
      methods.setError("senha", {
        type: "manual",
        message: e || "Erro no login",
      });
    }
  };

  return (
    <>
      <ModalLoginFa isOpen={isShowing} onClose={toggleModal} email={email} loginWithOtp={loginWithOtp}/>
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
    </>
  );
};

export default LoginAdotante;