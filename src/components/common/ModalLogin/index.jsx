import AuthContext from "@/context/AuthProvider";
import { LoginSchema } from "@/utils/formValidations";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ModalLogin = ({ isOpen, onClose }) => {
  const { login } = useContext(AuthContext);
  const methods = useForm({ resolver: zodResolver(LoginSchema) });

  if (!isOpen) {
    return null;
  }

  // const {formState: { error }} = methods;
  const handleLogin = async (data) => {
    try {
      console.log("Dados", data);
      await login("adotante", data);
    } catch (e) {
      methods.setError("senha", {
        type: "manual",
        message: e || "Erro no login",
      });
    }
  };

  return (
    <div className="z-20 fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>
      <div className="w-[50%] p-10 bg-branco rounded-lg shadow-lg relative z-20">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleLogin)} className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-end">
              <FontAwesomeIcon
                icon={faClose}
                onClick={onClose}
                className="cursor-pointer text-lg text-end"
              />
            </div>
            <section className="flex flex-col items-center justify-center gap-2 w-[75%]">
              <h1 className="text-2xl font-nunito text-[#363E52] text-center font-medium">
                Faça login para continuar
              </h1>
              <span className="text-center text-sm text-[#333333] font-nunito">
                Para acessar essa funcionalidade, é necessário fazer login em
                sua conta. Por favor, insira seus dados abaixo.
              </span>
            </section>

            <section className="flex flex-col gap-4 py-2 p-4 w-[75%]">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                {...methods.register("email")}
                id="email"
                name="email"
                type="email"
                placeholder="e-mail"
                className="w-full rounded-md border-2 border-[#CCCCCC] px-3 py-2 shadow-md sm:text-sm"
              />
              <label className="text-sm font-medium text-gray-700">Senha</label>
              <input
                {...methods.register("senha")}
                id="senha"
                name="senha"
                type="password"
                placeholder="senha"
                className="w-full rounded-md border-2 border-[#CCCCCC] px-3 py-2 shadow-md sm:text-sm"
              />
            </section>

            <section className="py-4 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <button
                  className="w-[8.333vw] h-[6.01vh] bg-[#4C8EB5] text-[#FFFFFF] rounded-lg"
                  type="submit"
                >
                  Entrar
                </button>
                <Link to="/login/cadastro-adotante">
                  <button
                    className="w-[8.333vw] h-[6.01vh] bg-[#FFA607] text-[#FFFFFF] rounded-lg"
                    type="submit"
                  >
                    Cadastrar
                  </button>
                </Link>
              </div>
              <span className="text-center text-sm text-[#333333]">
                Esqueci minha senha,
                <Link
                  to="/login/redefinir"
                  className="text-azul-main underline ml-1"
                >
                  clique aqui!
                </Link>
              </span>
            </section>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ModalLogin;
