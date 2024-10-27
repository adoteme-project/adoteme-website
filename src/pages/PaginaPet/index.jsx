import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BreadCrumb from '@/components/common/BreadCrumb';
import Card from '@/components/common/Card';
import Doacao from '@/components/section/Donation';
import Avaliacao from '@/components/feature/Rating';
import { useCardContext } from '@/context/CardProvider';
import Carousel from '@/components/common/Carrossel';
import Botao from '@/components/common/Button';
import { lime } from '@mui/material/colors';

const PaginaPet = () => {
    const { id } = useParams();
    const { sugestoes } = useCardContext();
    const [animal, setAnimal] = useState(null);
    const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];


    useEffect(() => {
        if (sugestoes.length > 0) {
            const animalEncontrado = sugestoes
                .filter(sugestao => sugestao.tipo === 'animal')
                .find(animal => animal.id === parseInt(id));

            if (animalEncontrado) {
                setAnimal(animalEncontrado);
            }
        }
    }, [id, sugestoes]);

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Coluna da Imagem e Ações */}
                    <div className="flex flex-col items-center">
                        <img
                            src={animal.imagemUrl}
                            alt={`Imagem de ${animal.nome}`}
                            className="w-[350px] h-auto rounded-lg"
                        />
                        <div className="flex gap-4 mt-4 justify-center">
                            <img src={animal.miniatura} alt="Miniatura 1" className="w-20 h-20 rounded-lg" />
                            <img src={animal.miniatura2} alt="Miniatura 2" className="w-20 h-20 rounded-lg" />
                            <img src={animal.miniatura3} alt="Miniatura 3" className="w-20 h-20 rounded-lg" />
                        </div>

                    </div>

                    {/* Coluna dos Textos */}
                    <div>
                        <h1 className="text-4xl font-bold bg-[#FFC55E] inline-block px-2 py-1">{animal.nome}</h1>
                        <p className="text-lg mt-2">{animal.localizacao}</p>
                        <p className="mt-2">Espécie: {animal.especie}</p>
                        <p>Sexo: {animal.sexo}</p>
                        <p>Idade: {animal.idade}</p>
                        <p>Tamanho: {animal.porte}</p>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center">
                                Energia: <Avaliacao avaliacao={animal.energia} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Sociável: <Avaliacao avaliacao={animal.sociavel} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Tolerante: <Avaliacao avaliacao={animal.tolerante} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Obediente: <Avaliacao avaliacao={animal.obediente} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Territorialista: <Avaliacao avaliacao={animal.territorialista} cor='#A9B949' />
                            </div>
                            <div className="flex items-center">
                                Inteligente: <Avaliacao avaliacao={animal.inteligente} cor='#A9B949' />
                            </div>
                        </div>
                        <p className="mt-4 font-bold text-[#EC5A49]">TAXA DE ADOÇÃO: R${animal.taxaAdocao}</p>
                        <Botao className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg" titulo={'Adotar'} color={lime} />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-bold">História</h2>
                    <p className="mt-4 text-lg">{animal.historico}</p>
                </div>
            </section>



            <section className="mt-10 p-10 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-center">Sugestão</h2>
                {sugestoes.length > 0 ? (
                    <Carousel
                        items={sugestoes.filter(sugestao => sugestao.tipo === 'animal')}
                        renderItem={(sugestao) => <Card key={sugestao.animal} data={sugestao} tipoCard="animal" colorBg={cores[sugestao.id % cores.length]} />}
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
