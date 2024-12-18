import {
  faAngleUp,
  faArrowRightFromBracket,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserById } from "@/services/adotanteAPI";
import { Link } from "react-router-dom";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/AuthProvider";

export default function Modal({ data }) {
  const { auth, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [requisicao, setRequisicoes] = useState([]);
  const [image, setImage] = useState("");

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const idAdotante = auth?.userData?.id;

  useEffect(() => {
    const fetchRequisicoes = async () => {
      try {
        const response = await getUserById(idAdotante);
        // console.log("Requisição feita com sucesso!", response);
        setRequisicoes(response);
        setImage(response.data.urlFoto);
        // console.log("IMAGEM!", response.data.urlFoto);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchRequisicoes();
  }, []);

  return (
    <>
      <div
        className="z-50 w-[240px] h-fit rounded-lg flex flex-col absolute top-5 py-4 right-0 px-4 mt-4 bg-[#FDF6F0] shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center py-1 gap-2">
          <img
            src={image}
            alt="Fotoo"
            className="rounded-full w-[2.5rem] h-[2.5rem] object-cover"
          />
          {/* <FontAwesomeIcon
            icon={faCircleUser}
            className="text-[#307299] text-4xl"
          /> */}
          <h1 className="font-nunito text-1xl">
            {auth?.userData?.nome || "Nome"}
          </h1>
        </div>
        <hr className="my-2 border-verde-border" />
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex flex-row">
            <Link to="/perfil/usuario" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-azul-light " />
              Meu perfil
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link to="/perfil/formulario" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="text-amarelo"
              />
              Aplicações
              <FontAwesomeIcon icon={faAngleUp} rotation={90} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Link to="/perfil/aplicacao" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faWpforms} className="text-verde" />
              Formulário
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
