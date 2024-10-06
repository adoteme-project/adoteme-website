import { login } from "@/services/authAPI";
import FormAuth from "../../components/common/FormAuth";
import { useContext } from "react";
import AuthContext from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginAdotante = () => {
  const { setAuth } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleLogin = async (data) => {
    try {
      console.log(data);
      const response = await login("adotante", data)
      console.log(response)
      
      const { email, senha } = response.data;
      const token = response?.data?.token

      if(response.status === 200) {
        setAuth({ email , senha, token})
        localStorage.setItem('token', token);

        navigation("/");
      } else {
        console.log("Login inválido: ", response.status, response.statusText)
      }

    } catch (error) {
      if(!error?.response) {
        console.log('Sem resposta do servidor');
      } else if(error.response?.status === 400) {
        console.log('Faltando email ou senha');
      } else if(error.response?.status === 401) {
        console.log("Não autorizado");
      } else {
        console.log("Operação falhou");
      }

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
