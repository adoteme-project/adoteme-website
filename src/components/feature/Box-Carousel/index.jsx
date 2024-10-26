import { useNavigate } from 'react-router-dom';

const Box = ({ id, color, imagem, nome }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirecionar para a página Categorias com a categoria como parâmetro de consulta
    navigate(`/categorias?categoria=${nome}`);
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
      <img src={imagem} alt="Imagem do Box" className="w-full h-auto object-cover" />
    </div>
  );
};

export default Box;
