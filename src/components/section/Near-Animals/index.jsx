import GridAnimais from '@/components/layout/Grid';

function AnimaisProximos(props) {
    return (
        <section className = "flex flex-col items-center h-[100]">
        <h1 className="text-3xl text-center bg-white font-semibold text-titulo mb-10">{props.children}</h1>  
        <GridAnimais tipo = {props.tipo}/>
        </section>      
    );
}

export default AnimaisProximos;
