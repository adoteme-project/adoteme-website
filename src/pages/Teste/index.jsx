import { useEffect, useState } from "react";
import ListAchados from "../../components/ListAchados";

const Teste = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('/pets.json')
          .then(response => response.json())
          .then(data => setPets(data)) 
          .catch(error => console.error('Erro json pets', error))
      }, []);

    return (
        <>
            <ListAchados pets={pets}/>
        </>
    )
}

export default Teste;