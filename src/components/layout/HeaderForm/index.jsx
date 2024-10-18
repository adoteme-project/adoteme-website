import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGoBack from "../../../hooks/useBackNavigation";
import logoAdoteme from "../../../assets/logo_adotme.png";

const HeaderForm = ({ hasIcon, hasBackButton }) => {
  const goBackAction = useGoBack("/");

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
        <img src={logoAdoteme} alt="Logo AdoteMe" className="h-7 w-9" />
      )}
    </div>
  );
};

export default HeaderForm;
