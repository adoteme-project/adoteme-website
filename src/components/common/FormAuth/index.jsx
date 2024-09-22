import { Link } from "react-router-dom";
import Input from "../Input";

const FormAuth = () => {
  return (
    <form className="max-w-screen-lg w-1/3 p-16 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-bold"> Login </h1>
        <h3 className="text-2xl text-center text-cinza"> Adotante </h3>
      </div>
      <Input label={"Email"} placeholder="email@exemplo.com" />
      <Input label={"Senha"} placeholder="Digia sua senha..." />
      <div className="flex justify-between gap-8">
        <button className="w-full p-3 text-center bg-verde rounded-md font-bold">
          Entar
        </button>
        <Link
          to={`/login/cadastro-adotante`}
          className={`w-full p-3 text-center bg-amarelo rounded-md font-bold`}
        >
          Cadastrar
        </Link>
      </div>
    </form>
  );
};

export default FormAuth;
