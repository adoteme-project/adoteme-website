import Card from "@/components/common/Card";

const GridLayout = ({ items, onDoarClick, titulo, tipoCard, isCategoria, categoriaName }) => {
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  return (
    <div className="flex flex-col gap-10 w-[90%]">
      <h1 className="text-center text-3xl font-nunito">{titulo}</h1>
      <div className="flex justify-center items-center">
        <section className="grid grid-cols-2 gap-x-10 gap-y-8 w-full">
          {items.map((data, index) => (
            <Card
              key={data.id}
              data={data}
              colorBg={cores[index % cores.length]}
              onDoarClick={onDoarClick}
              tipoCard={tipoCard}
              isCategoria={isCategoria}
              categoriaName={categoriaName}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default GridLayout;
