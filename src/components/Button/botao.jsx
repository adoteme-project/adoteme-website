const Botao = ({ color, textColor, fontWeight, tamanho,altura, texto, fontSize }) => {
  return (
    <button
      className={`bg-${color} text-${textColor} font-${fontWeight} text-${fontSize} px-6 py-3 rounded-lg font-nunito text-center`}
      style={{
        width: `${tamanho}px`,
        height: `${altura}px `
      }}
    >
      {texto}
    </button>
  );
};
export default Botao;