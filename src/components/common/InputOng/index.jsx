import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputOng = () => {
  return (
    <div className="relative block">
      <label htmlFor="Search" className="sr-only">
        Pesquisa
      </label>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="sr-only"> Pesquisa </span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        id="pesquisa"
        placeholder="Pesquisar..."
        className="w-full rounded-full bg-input-d py-2.5 pe-8 pl-9 focus:outline-none block"
      />
    </div>
  );
};

export default InputOng;
