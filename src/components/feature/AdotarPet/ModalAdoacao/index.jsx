const ModalAdocaoConfirmacao = ({ isOpen, onClose, handleAdoptAnimal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-lg font-semibold mb-4">
          Você está prestes a enviar uma solicitação de adoção. Por favor, confirme que você tem certeza e está preparado para fornecer um lar permanente.
        </h2>
        
        <div className="flex justify-around">
          <button
            className="bg-vermelho text-white py-2 px-6 rounded-lg"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-verde text-white py-2 px-6 rounded-lg"
            onClick={async () => {
              await handleAdoptAnimal(); 
              onClose(); 
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdocaoConfirmacao;
