import Box from "../Box-Carousel";
import Slider from "../Carousel/Carrosel";
import BreadCrumb from '../BreadCrumb'

const Carousel = (props) => {
    let cores = [];
    let data = [];

    if(props.tipo == "categorias"){
        cores = ['#FFC55E', '#C6D668', '#4C8EB5'];

        data = [
            { id: '1', nome: 'Brincalhões'},
            { id: '2', nome: 'Curiosos' },
            { id: '3', nome: 'Sociável' },
            { id: '4', nome: 'Divertidos' },
            { id: '5', nome: 'Animados' }
        ];

        // console.log("Cores:", cores)
        // console.log("Dados:", data)
    }
    if(props.tipo == "ongs"){
        data = [
            { id: '1', nome: 'CAO SEM DONO' },
            { id: '2', nome: 'VICA' },
            { id: '3', nome: 'ANJO GABRIEL' },
            { id: '4', nome: 'ONG' },
            { id: '5', nome: 'ONG' }
        ];
    }

    
    // console.log("Dados:", data)

    return (
        <section className="h-[71.79vh] bg-white flex flex-col justify-center">
            <h1 className="text-4xl text-center font-bold font-nunito text-azul-dark">{props.titulo}</h1>
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

export default Carousel;