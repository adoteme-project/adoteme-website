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
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthProvider";

export default function Modal() {
  const { auth, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <div
        className="z-50 w-[240px] h-fit rounded-lg flex flex-col absolute top-5 py-4 right-0 px-4 mt-4 bg-[#FDF6F0] shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center py-1 gap-2">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-[#307299] text-4xl"
          />
          <h1 className="font-nunito text-1xl">
            {auth?.userData?.nome || "Nome"}
          </h1>
        </div>
        <hr className="my-2 border-verde-border" />
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-azul-light " />
            Meu perfil
            <Link to="/perfil/usuario" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              className="text-amarelo"
            />
            Aplicações
            <Link to="/perfil-formulario" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <FontAwesomeIcon icon={faWpforms} className="text-verde" />
            Formulário
            <Link to="/perfil-formulario" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div
            className="flex flex-row items-center gap-4 cursor-pointer"
            onClick={logout}
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-vermelho font-bold text-1xl"
              rotation={180}
            />
            Sair
          </div>
        </div>
      </div>
    </>
  );
}
