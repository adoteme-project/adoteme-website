import { createContext, useContext, useState, useEffect } from 'react';
import { getAllPets, getOngs } from '@/services/siteAPI';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [sugestoes, setSugestoes] = useState([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const responseAnimais = await getAllPets();

                const responseOngs = await getOngs();

                console.log(responseAnimais.data)
                console.log(responseOngs.data)

                const dadosCombinados = [   
                    ...responseAnimais.data.map(animal => ({ ...animal, tipo: 'animal' })),
                    ...responseOngs.data.map(ong => ({ ...ong, tipo: 'ong' }))
                ];

                setSugestoes(dadosCombinados);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        };

        fetchDados();
    }, []);


    return (
        <CardContext.Provider value={{ sugestoes }}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => useContext(CardContext);
