import { useNavigate } from 'react-router-dom';

const BoxOng = ({ id, color, imagem, nome }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pagina-ong/${id}`);
  };

  return (
    <div
      id={id}
      className="w-[288px] h-[192px] shadow-md rounded-lg cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <h1 className="text-left font-robot text-2xl px-3 py-4 font-semibold">
        {nome}
      </h1>
      <img 
        src={imagem} 
        alt="Imagem da ONG" 
        className="w-3/4 h-auto mx-auto object-contain" 
      />
    </div>
  );
};

export default BoxOng;
