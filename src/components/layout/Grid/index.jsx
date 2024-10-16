import { useCardContext } from '@/context/CardProvider';
import Card from "@/components/common/Card";

const GridLayout = ({ onDoarClick, titulo, tipoCard }) => {
  const { sugestoes } = useCardContext();
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];
  console.log("tipo card", tipoCard)
  const validItems = sugestoes.filter(item => item.tipo === tipoCard);

  return (
    <>
      <h1 className="text-center py-4 text-3xl font-nunito">{titulo}</h1>
      <div className="flex justify-center items-center">
        <section className="grid grid-cols-2 gap-10">
          {validItems.map((data, index) => (
            <Card
              key={data.id}
              data={data}
              colorBg={cores[index % cores.length]}
              onDoarClick={onDoarClick}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default GridLayout;
