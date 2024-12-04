import { useNavigate } from 'react-router-dom';

const BoxOng = ({ id, color, imagem, nome }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pagina-ong/${id}`);
  };

  return (
    <div
      id={id}
      className="sm:w-[20%] md:w-[40%] lg:w-[50%] xl:w-[60%] h-52 shadow-md rounded-lg cursor-pointer flex flex-col items-center"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <h1 className="text-left font-robot text-2xl px-3 py-4 font-semibold">
        {nome}
      </h1>
      <img 
        src={imagem} 
        alt="Imagem da ONG" 
        className="w-32 h-32 object-cover !rounded-full object-center" 
      />
    </div>
  );
};

export default BoxOng;
