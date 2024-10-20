import ModalPerfil from "@/components/common/ModalPerfil";
import AuthContext from "@/context/AuthProvider";
import useModal from "@/hooks/useModal";
import Button from "@/components/common/Button";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalShowing, toggleModal] = useModal();
  const { auth } = useContext(AuthContext);

  return (
    <nav className="bg-branco py-6 w-full flex justify-center h-[20px]">
      <ul className="w-11/12 flex justify-between items-center">
        <Link to="/">Logo</Link>
        <div className="flex gap-10 items-center">
          <Link to="/pets">Animais</Link>
          <Link to="/ongs">Ongs</Link>
          <Link to="/achados">Achados e Perdidos</Link>

          {auth?.token ? (
            <>
              <Link to="/favoritos">
                <FontAwesomeIcon icon={faHeart} className="text-vermelho" />
              </Link>

              <div className="relative flex justify-center items-center flex-col">
                <FontAwesomeIcon
                  icon={faUser}
                  onClick={toggleModal}
                  className="cursor-pointer"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login/cadastro-adotante"
                className="rounded bg-[#FFA607] text-branco py-0.5 h-[30px] text-center w-[116px]"
              >
                Cadastrar
              </Link>
              <Button
                tamanho="100"
                altura="30"
                textColor="#FFFFFF"
                color="#4C8EB5"
                titulo="Entrar"
                onClick={toggleModal}
              >
                Entrar
              </Button>
            </>
          )}
          {isModalShowing && (
            <ModalPerfil isOpen={isModalShowing} toggleModal={toggleModal} />
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
