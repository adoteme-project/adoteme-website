const ModalRejectAvaliacao = ({ show, onCloseModal }) => {
    if (!show) return null;

    const handleReject = () => {
        console.log("Reijeitado");
        onCloseModal();
    }

    return (
        <>
            <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>
            <div className="fixed inset-x-1/4 top-1/4 z-30 bg-branco rounded-xl py-8 shadow-lg w-[50%] flex flex-col items-center">
                <h3 className="text-xl text-azul-main font-semibold text-center">Motivo de rejeição</h3>
                <p className="text-sm text-center my-4">Selecione o motivo da rejeição abaixo</p>
                <select className="w-[70%] my-8 rounded-md border-amarelo border-2 px-3 py-2">
                    <option>Motivo 1</option>
                    <option>Motivo 2</option>
                    <option>Motivo 3</option>
                </select>
                <button
                    className="bg-amarelo px-16 py-3 rounded-md text-branco w-[30%]"
                    onClick={handleReject}>
                    <Ri:v></Ri:v>ejeitar
                </button>
            </div>
        </>

    );
};

export default ModalRejectAvaliacao;