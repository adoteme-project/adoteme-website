import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SideBarUsuario = () => {

  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(url)
  }

  return (
    <section className="w-[278px] h-100% bg-branco px-4 border-r-2 border-verde flex flex-col ">
      <p className="font-nunito text-2xl text-verde font-medium mt-10">
        Configurações
      </p>
      <ul className="py-4 flex flex-col gap-2 items-start text-1xl">
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faUser} />
          <li style={{cursor:"pointer"}} onClick={() => handleRedirect("/perfil")}>Meu perfil</li>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <li style={{cursor:"pointer"}} onClick={() => handleRedirect("/perfil-aplicacao")}>Aplicações</li>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faWpforms} />
          <li style= {{cursor:"pointer"}} id="formulario-li"onClick={() => handleRedirect("/perfil-formulario")} >Formulário</li>
        </div>
        <div className="flex flex-row items-center gap-2 mt-5">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="text-azul-main font-bold text-1xl"
            rotation={180}
          />
          <a
            href="/"
            className="text-azul-main font-medium text-1xl font-nunito"
          >
            Sair
          </a>
        </div>
      </ul>
      <a href=""></a>
    </section>
  );
};

export default SideBarUsuario;
