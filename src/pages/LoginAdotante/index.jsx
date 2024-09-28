import FormAuth from "../../components/common/FormAuth";

const LoginAdotante = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full justify-center items-center flex">
      <FormAuth
        title="Login"
        subtitle="Adotante"
        fields={[
          { label: "Email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Senha", type: "password", placeholder: "Digite sua senha..." }
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
