const Botao = ({ color, textColor, fontWeight, tamanho, altura, titulo, fontSize, onClick}) => {

  return (
    <button
      className={`font-${fontWeight} px-6 rounded-lg font-nunito text-center`}
      style={{
        width: `${tamanho}px`,
        height: `${altura}px `,
         fontSize: fontSize ? `${fontSize}px` : 'inherit',
         backgroundColor: `${color}`,
         color: `${textColor}`,
      }}
      onClick={onClick}
    >
      {titulo}
    </button>
  );
};
export default Botao;