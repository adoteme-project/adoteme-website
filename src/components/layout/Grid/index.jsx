import Card from "@/components/common/Card";

const GridLayout = ({ items, onDoarClick, titulo}) => {
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  return (
    <>
      <h1 className="text-center py-8 text-3xl font-nunito">{titulo}</h1>
      <div className="flex justify-center items-center">
        <section className="grid grid-cols-2 gap-10">
          {items.map((data, index) => (
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
