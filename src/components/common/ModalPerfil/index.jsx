import {
  faAngleUp,
  faArrowRightFromBracket,
  faCircleUser,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import Input from "@/components/common/Input";
import AuthContext from "@/context/AuthProvider";
import Button from "@/components/common/Button";

export default function Modal({ isOpen, toggleModal }) {
  console.log("ModalPerfil isOpen", isOpen);
  const { auth } = useContext(AuthContext);
  if (!isOpen) return null;

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return auth?.token ? (
    <>
      <div className="z-50 w-[240px] h-fit rounded-lg flex flex-col absolute top-5 py-4 px-4 mt-4 bg-[#FDF6F0] shadow-lg">
        <div className="flex flex-row items-center border-b-[1px] border-verde py-1 gap-2">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-[#307299] text-4xl"
          />
          <h1 className="font-nunito text-1xl">Nome usuário</h1>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-azul-light " />
            Meu perfil
            <Link to="/perfil" onClick={toggleModal}>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="text-amarelo"
            />{" "}
            Aplicações
            <Link to="/perfil-formulario onClick={toggleModal}">
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon icon={faWpforms} className="text-verde" />
            Formulário
            <Link to="perfil-formulario onClick={toggleModal}">
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-vermelho font-bold text-1xl"
              rotation={180}
            />{" "}
            Sair
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="z-50 h-fit rounded-lg flex flex-col absolute top-10 py-4 px-4 mt-4 bg-[#FDF6F0] shadow-lg">
      <div className="w-[400px] h-[450px] bg-branco p-4">
        <h1 className="text-3xl text-[#363E52] text-center">
          Faça login para continuar
        </h1>
        <p className="font-nunito text-center py-6">
          Para acessar essa funcionalidade, é necessário fazer login em sua
          conta. Por favor, insira seus dados abaixo.
        </p>
        <div className="flex flex-col gap-4 py-2">
          <Input label="Email" placeholder="e-mail" name="email" />
          <Input
            label="Senha"
            placeholder="senha"
            name="senha"
            type="password"
          />
        </div>

        <div className="py-4 flex justify-center gap-2">
          <Button
            titulo="Entrar"
            tamanho="150"
            altura="40"
            color="#4C8EB5"
            textColor="#FFFFFF"
            onClick={handleLogin}
          />
          <Link to="/login">
            <Button
              titulo="Cadastrar"
              tamanho="150"
              altura="40"
              color="#FFA607"
              textColor="#FFFFFF"
            />
          </Link>
        </div>
        <span className="text-center block">
          Esqueci minha senha,
          <Link to="/login/redefinir" className="text-azul-main underline">
            {" "}
            clique aqui!
          </Link>
        </span>
      </div>
    </div>
  );
}
