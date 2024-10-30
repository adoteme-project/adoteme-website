import { useContext } from "react";
import { Link } from "react-router-dom";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPerfil from "@/components/common/ModalPerfil";
import useModal from "@/hooks/useModal";
import AuthContext from "@/context/AuthProvider";
import logoAdoteme from "../../../assets/logo_adotme.png";

const Header = () => {
  const [isShowing, toggleModal] = useModal();
  const { auth } = useContext(AuthContext);

  return (
    <nav className="bg-branco py-8 w-full flex justify-center h-[20px] shadow-sm">
      <ul className="w-11/12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link className="flex gap-2" to="/">
            <img src={logoAdoteme} alt="" className="h-8 w-10" />
            <h3 className="font-nunito text-azul-main font-bold text-xl">
              adoteMe
            </h3>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link to="/pets" className="font-nunito font-medium text-1xl">
            Animais
          </Link>
          <Link to="/ongs" className="font-nunito font-medium text-1xl">
            Ongs
          </Link>
          <Link to="/achados" className="font-nunito font-medium text-1xl">
            Achados e Perdidos
          </Link>

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
                {isShowing && <ModalPerfil isOpen={isShowing} />}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login/cadastro-adotante"
                className="rounded bg-[#FFA607] font-medium text-branco py-0.5 h-[30px] text-center w-[130px] transform transition duration-300 ease-in-out hover:bg-[#e69506] hover:scale-105 hover:shadow-lg"
              >
                Cadastrar
              </Link>
              <Link
                to="/login"
                className="rounded bg-azul-main font-medium text-branco py-0.5 h-[30px] text-center w-[80px] transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Entrar
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
