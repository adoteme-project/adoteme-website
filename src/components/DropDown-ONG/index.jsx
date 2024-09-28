import InputLabel from "@mui/material/InputLabel";
import Botao from "../Button/index";

const DropDown = (props) => {
  return (
    <section className="w-full flex justify-between py-10 px-14">
      <div className="flex justify-start">
        <Botao
          color="#4C8EB5"
          tamanho="223"
          altura="52"
          titulo="Ongs mais próximas"
          textColor="#FDF6F0"
        />
      </div>
      <div className="flex items-center justify-end gap-10">
        <input
          type="text"
          className="border rounded-lg h-[48px] w-[253px] text-xs pl-2"
          placeholder="Buscar"
        />
        <Botao
          color="#C6D668"
          tamanho="223"
          altura="52"
          titulo="Buscar"
          textColor="#000000"
        />
      </div>
    </section>
  );
};

export default DropDown;
