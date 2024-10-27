import GridAnimais from '@/components/layout/Grid';

function AnimaisProximos({ items = [], titulo, tipoCard }) {
  const limitedItems = Array.isArray(items) ? items.slice(0, 4) : [];

  return (
    <section className="flex flex-col items-center h-[100]">
      <h1 className="text-3xl text-center bg-white font-semibold text-titulo mb-10">{titulo}</h1>
      <GridAnimais items={limitedItems} tipoCard={tipoCard} />
    </section>
  );
}

export default AnimaisProximos;
