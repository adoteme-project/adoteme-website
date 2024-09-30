import GridLayout from '@/components/layout/Grid';

function SectionGrid(props) {
    return (
        <section className = "flex flex-col items-center h-[100]">
        <h1 className="text-3xl text-center bg-white font-semibold text-titulo mb-10">{props.children}</h1>  
        <GridLayout items={props.data || []} />
        </section>      
    );
}

export default SectionGrid;