import Card from "./CardAnimal";

const GridAnimais = () => {

    const cores = [
        '#FFC55E','#A9B949','#B2DED3','#EC5A49'
    ]

    const grids = [
        {
            key: 1, 
            name: 'NOHA',
            idade: '2 anos'
        },
        {
            key: 2, 
            name: 'PUDIM',
            idade: '2 anos'
        },
        {
            key: 3, 
            name: 'ALFREDO',
            idade: '2 anos'
        },
        {
            key: 4, 
            name: 'PAÇOCA',
            idade: '2 anos'
        }
    ]

    return (
        <>
        <section className = "grid grid-cols-2 gap-10">
            {grids.map((grid, index) =>
                <Card 
                key={grid.key}
                name={grid.name}
                colorBg= {cores[index % cores.length]}
                />
            )}
        </section>
        </>
    );
};

export default GridAnimais;