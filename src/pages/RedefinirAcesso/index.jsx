import FormAuth from "../../components/common/FormAuth";

const RedefinirAcesso = () => {
  const handleReset = (e) => {
    e.preventDefault();
  };

  const textContent = 'Insira o e-mail do usuário para a recuperação de senha. O sistema irá enviar o e-mail de confirmação caso o usuário esteja validado.'

  return (
    <div className="w-full justify-center items-center flex">
      <FormAuth
        title="Redefinição de senha"
        fields={[
          { label: "Email", type: "email", placeholder: "email@exemplo.com", name: 'email'}
        ]}
        onSubmit={handleReset}
        buttonLabel="Enviar"
        description={textContent}
      />
    </div>
  );
};

export default RedefinirAcesso;