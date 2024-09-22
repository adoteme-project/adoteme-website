import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGoBack from "../../../hooks/useBackNavigation";
import logoAdoteme from "../../../assets/logo_adotme.png";

const HeaderFrom = ({ hasIcon, hasBackButton }) => {
  const goBackAction = useGoBack("/"); // Passa o parâmetro de volta default

  return (
    <div className="shadow-md p-5 w-full flex justify-between">
      {hasBackButton && (
        <FontAwesomeIcon
          onClick={goBackAction}
          icon={faArrowLeft}
          className="text-xl cursor-pointer"
        />
      )}
      {hasIcon && (
        <img src={logoAdoteme} alt="Logo AdoteMe" className="h-10 w-10" />
      )}
    </div>
  );
};

export default HeaderFrom;
