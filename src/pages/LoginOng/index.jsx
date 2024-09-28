import FormAuth from "../../components/common/FormAuth";

const LoginOng = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full justify-center items-center flex">
      <FormAuth
        title="Login"
        subtitle="ONG"
        fields={[
          { label: "Email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Senha", type: "password", placeholder: "Digite sua senha..." }
        ]}
        onSubmit={handleLogin}
        buttonLabel="Entrar"
        linkForgot={true}
      />
    </div>
  );
};

export default LoginOng;
