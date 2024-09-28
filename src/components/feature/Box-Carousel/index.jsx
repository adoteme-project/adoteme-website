const Box = ({ id, color, imagem, nome }) => {
    return (
      <div id={id} className={`w-[288px] h-[192px] shadow-md rounded-lg`} style={{backgroundColor: color}}>
        <h1 className="text-left font-robot text-2xl px-3 py-4 font-semibold">
          {nome}
        </h1>
        <img src={imagem} alt="Imagem do Box" className="w-full h-auto object-cover" />
      </div>
    );
  };
export default Box;