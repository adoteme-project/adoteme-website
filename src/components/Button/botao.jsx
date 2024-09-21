const Botao = ({ color, textColor, fontWeight, tamanho,altura, nome }) => {
  return (
    <button
      className={`bg-${color} text-${textColor} font-${fontWeight} px-6 py-3 rounded-lg font-nunito text-center`}
      style={{
        width: `${tamanho}px`,
        height: `${altura}px `
      }}
    >
      {nome}
    </button>
  );
};
export default Botao;