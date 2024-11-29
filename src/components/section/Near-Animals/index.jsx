import GridAnimais from '@/components/layout/Grid';

function AnimaisProximos({ items = [], titulo, tipoCard }) {
  const limitedItems = Array.isArray(items) ? items.slice(0, 4) : [];

  return (
    <section className="flex flex-col items-center ">
      <h1 className="text-3xl text-center font-semibold text-titulo">{titulo}</h1>
      <GridAnimais items={limitedItems} tipoCard={tipoCard} />
    </section>
  );
}

export default AnimaisProximos;
