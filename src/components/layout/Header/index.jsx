import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="bg-branco py-6 w-full flex justify-center">
      <ul className="w-11/12 flex justify-between items-center">
        <Link to="/">Logo</Link>
        <div className="flex gap-10 items-center">
          <Link to="/pets">Animais</Link>
          <Link to="/doacoes">Doações</Link>
          <Link to="/ongs">Ongs</Link>
          <Link to="/achados">Achados e Perdidos</Link>
          <Link to="/favoritos"><FontAwesomeIcon icon={faHeart} className="text-vermelho"/></Link> 
          <Link to="/perfil"><FontAwesomeIcon icon={faUser} /></Link>
          <Link to="/login" className="rounded bg-azul-main text-branco px-4 py-2"> Entrar </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
