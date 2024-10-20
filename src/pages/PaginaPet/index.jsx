import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BreadCrumb from '@/components/common/BreadCrumb';
import Card from '@/components/common/Card';
import Doacao from '@/components/section/Donation';
import Avaliacao from '@/components/feature/Rating';
import { useCardContext } from '@/contextCard/index';
import Carousel from '@/components/common/Carrossel';

const PaginaPet = () => {
    const { id } = useParams();
    const { data } = useCardContext();
    const [animal, setAnimal] = useState(null);
    const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];


    useEffect(() => {
        if (data.length > 0) {
            const animalEncontrado = data
                .filter(sugestao => sugestao.tipo === 'animal')
                .find(animal => animal.id === parseInt(id));

            if (animalEncontrado) {
                setAnimal(animalEncontrado);
            }
        }
    }, [id, data]);

    if (!animal) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <BreadCrumb
                tituloCaminho="Animais"
                tituloCaminho2="Página Pets"
                tituloCaminho3={animal.nome}
                cor="#B2DED3"
                caminho={`/pagina-pet/${animal.id}`}
            />

            <section className="p-10 bg-beje">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <img src={animal.imagemUrl} alt={`Imagem de ${animal.nome}`} className="w-full h-auto rounded-lg" />
                        <div className="flex gap-4 mt-4">
                            <img src={animal.imagemUrl} alt="Miniatura 1" className="w-20 h-20 rounded-lg" />
                            {animal.imagem2 && <img src={animal.imagem2} alt="Miniatura 2" className="w-20 h-20 rounded-lg" />}
                            {animal.imagem3 && <img src={animal.imagem3} alt="Miniatura 3" className="w-20 h-20 rounded-lg" />}
                        </div>
                        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg">Adotar</button>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">{animal.nome}</h1>
                        <p className="text-lg">{animal.localizacao}</p>
                        <p className="mt-2">Espécie: {animal.especie}</p>
                        <p>Sexo: {animal.sexo}</p>
                        <p>Idade: {animal.idade}</p>
                        <p>Tamanho: {animal.tamanho}</p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center">
                                Energia: <Avaliacao avaliacao={animal.energia} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Sociável: <Avaliacao avaliacao={animal.sociavel} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Territorialista: <Avaliacao avaliacao={animal.territorialista} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Inteligente: <Avaliacao avaliacao={animal.inteligente} cor='#A9B949' />
                            </div>
                        </div>
                        <p className="mt-4 font-bold">TAXA DE ADOÇÃO: {animal.taxaAdocao}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-bold">História</h2>
                    <p className="mt-4 text-lg">{animal.historico}</p>
                </div>
            </section>

            <section className="mt-10 p-10 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-center">Sugestão</h2>
                {data.length > 0 ? (
                    <Carousel
                        items={data.filter(sugestao => sugestao.tipo === 'animal')}
                        renderItem={(sugestao) => <Card key={sugestao.animal} data={sugestao} colorBg={cores[sugestao.id % cores.length]} />}
                        slidesPerView={2}
                        spaceBetween={10}
                    />
                ) : (
                    <p>Nenhuma sugestão disponível no momento.</p>
                )}
            </section>

            <Doacao />
        </>
    );
}

export default PaginaPet;