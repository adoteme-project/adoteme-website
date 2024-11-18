import { Link } from "react-router-dom";

const UserSelect = (props) => {
  return (
    <div className="relative w-64 font-nunito">
      <div className="bg-verde rounded-full h-64 w-64" />
      <img
        src={props.userLogo}
        alt="Usuário Adotante"
        className="absolute bottom-0 z-0 w-full"
      />
      <Link
        to={`/login/${props.context}`}
        className={`w-full p-3 text-center 
          ${props.context === "ong" ? "bg-amarelo" : "bg-azul-main"} 
          rounded-md z-10 absolute bottom-0 font-bold text-branco`}
        preventScrollReset={true}
      >
        {props.context.toUpperCase()}
      </Link>
    </div>
  );
};

export default UserSelect;
