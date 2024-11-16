const ButtonAvaliacao = ({ toggleModal }) => {
    const handleModalAvaliacao = () => {
        console.log('Abriu');
        toggleModal;
    };

    return <button onClick={handleModalAvaliacao} className="text-azul-main font-bold underline cursor-pointer"> Avaliar </button>;
};

export default ButtonAvaliacao;