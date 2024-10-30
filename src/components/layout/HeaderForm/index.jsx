import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGoBack from "../../../hooks/useBackNavigation";
import logoAdoteme from "../../../assets/logo_adotme.png";
import { useNavigate } from "react-router-dom";

const HeaderForm = ({ hasIcon, hasBackButton }) => {
  const goBackAction = useGoBack('/');
  const navigate = useNavigate();

  return (
    <div className="shadow-md p-3 w-full flex justify-between items-center">
      {hasBackButton && (
        <FontAwesomeIcon
          onClick={goBackAction}
          icon={faArrowLeft}
          className="text-lg cursor-pointer"
        />
      )}
      {hasIcon && (
        <img src={logoAdoteme} alt="Logo AdoteMe" className="h-7 w-9 cursor-pointer" onClick={() => navigate('/')} />
      )}
    </div>
  );
};

export default HeaderForm;
