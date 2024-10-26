import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Botao = ({ color, textColor, fontWeight, tamanho, altura, titulo, fontSize, onClick,icon,margin}) => {

  return (
    <button
      className={`font-${fontWeight} px-6 rounded font-nunito text-center`}
      style={{
        width: `${tamanho}px`,
        height: `${altura}px `,
         fontSize: fontSize ? `${fontSize}px` : 'inherit',
         backgroundColor: `${color}`,
         color: `${textColor}`,
         marginRight: `${margin}`
      }}
      onClick={onClick}
    >
      {titulo}
      {icon && <FontAwesomeIcon icon={icon} style={{ marginLeft:"8px"}}/>}
    </button>
  );
};
export default Botao;