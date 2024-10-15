import ModalPerfil from "@/components/common/ModalPerfil";
import useModal from "@/hooks/useModal";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShowing, toggleModal] = useModal();

  return (
      <nav className="bg-branco py-6 w-full flex justify-center h-[20px]">
        <ul className="w-11/12 flex justify-between items-center">
          <Link to="/">Logo</Link>
          <div className="flex gap-10 items-center">
            <Link to="/pets">Animais</Link>
            <Link to="/doacoes">Doações</Link>
            <Link to="/ongs">Ongs</Link>
            <Link to="/achados">Achados e Perdidos</Link>

            <Link to="/favoritos">
              <FontAwesomeIcon icon={faHeart} className="text-vermelho" />
            </Link>

            <div className="relative flex justify-center items-center flex-col">
              <FontAwesomeIcon
                icon={faUser}
                onClick={toggleModal}
                className="cursor-pointer"
              />

              {isShowing && <ModalPerfil isOpen={isShowing} toggleModal={toggleModal}/>}
            </div>

            <Link
              to="/login"
              className="rounded bg-azul-main text-branco py-0.5 h-[30px] text-center w-[80px]"
            >
              Entrar
            </Link>
          </div>
        </ul>
      </nav>
  );
};

export default Header;
