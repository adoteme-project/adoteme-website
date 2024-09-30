import Card from "@/components/common/Card";

const GridLayout = ({ items = [] }) => {
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  return (
    <section className="grid grid-cols-2 gap-10">
      {items.map((data, index) => (
        <Card
          key={data.key}
          data={data}
          colorBg={cores[index % cores.length]}
        />
      ))}
    </section>
  );
};

export default GridLayout;