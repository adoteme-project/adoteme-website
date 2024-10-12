import GridAnimais from '@/components/layout/Grid';

function AnimaisProximos({ items = [], titulo,tipoCard }) {
    console.log("Chegou aquii!!", items); // Verifique aqui
    const validItems = Array.isArray(items) ? items : [];
  
    return (
      <section className="flex flex-col items-center h-[100]">
        <h1 className="text-3xl text-center bg-white font-semibold text-titulo mb-10">{titulo}</h1>
        <GridAnimais items={validItems} tipoCard={tipoCard} />
      </section>
    );
  }

export default AnimaisProximos;
