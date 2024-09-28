import Box from "./Box/box";
import Slider from "../../common/Carrosel/Carrosel";

const Categorias = () => {
    const cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

    const data = [
        { id: '1', nome: 'Brincalhões' },
        { id: '3', nome: 'Sociável' },
        { id: '4', nome: 'Divertidos' },
        { id: '5', nome: 'Animados' }
    ];

    return (
        <section className="h-[71.79vh] bg-white py-5 flex flex-col justify-center">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">Categorias</h1>
            <Slider slidePerview={3} data={data} color={cores}>
                {data.map((item, index) => (
                    <Box
                        key={item.id}
                        id={item.id}
                        color={cores[index % cores.length]}
                        nome={item.nome}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Categorias;