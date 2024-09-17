import { useEffect, useState } from "react";
import ListAchados from "../../components/ListAchados";
import useModal from "../../hooks/useModal";

const Teste = () => {

    const [pets, setPets] = useState([]);
    const [isShowingModal, toogleModal] = useModal();

    useEffect(() => {
        fetch('/pets.json')
          .then(response => response.json())
          .then(data => setPets(data)) 
          .catch(error => console.error('Erro json pets', error))
      }, []);

    return (
        <>
            <button onClick={toogleModal} className="bg-azul-main p-2">Mostar modal</button>
            <ListAchados pets={pets} show={isShowingModal} onClose={toogleModal} />
        </>
    )
}

export default Teste;