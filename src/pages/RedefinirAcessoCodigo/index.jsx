import { useNavigate } from "react-router-dom";

const RedefinirAcessoCodigo = () => {


  const codigo = localStorage.getItem("codigo");
  const codigoValidacao = JSON.parse(codigo);

  const form = e.target;
  const valorCodigo = form.codigo.value;

  const validarCodigo = () => {
    if (valorCodigo == codigoValidacao) {
      useNavigate("/login/redefinir-senha")
    }
  }


  const textContent = 'Insira o e-mail do usuário para a recuperação de senha. O sistema irá enviar o e-mail de confirmação caso o usuário esteja validado.'

  return (
    <div className="w-full justify-center items-center flex">
      <form onSubmit={validarCodigo}></form>
      <input type="text" id="" value={codigo} />
      <input type="text" name="codigo" />
      <button type="Submit">{useNavigate("/login/redefinir-senha")}</button>
    </div>
  );
};

export default RedefinirAcessoCodigo;