import GridAnimais from './Animais/GridAnimals.jsx';

function AnimaisProximos(props) {
    return (
        <section className = "flex flex-col items-center h-[136vh]">
        <h1 className="text-3xl text-center bg-white font-semibold text-titulo mb-10">{props.children}</h1>  
        <GridAnimais/>
        </section>      
    );
}

export default AnimaisProximos;
