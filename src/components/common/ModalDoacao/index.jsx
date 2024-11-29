import Button from "@/components/common/Button";


export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-azul-light bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[500px] h-[550px] bg-branco rounded-lg flex justify-center items-center flex-col gap-4 py-4">
        <section className="w-[400px] h-[300px] bg-beje rounded-lg mt-4" >
          <h1 className="text-center font-nunito text-3xl font-medium text-azul-dark py-2">Doações via PIX</h1>

          <div className="px-4 flex flex-col gap-4">
          <p className="font-nunito font-medium">Chave pix</p>
          <div className="flex justify-between gap-2">
          <input type="text" className="border-1 rounded-md w-[300px] h-[28px]" />
          <Button tamanho="90" altura="28" color="#C6D668" fontSize="15" textColor="#1B1B1B" titulo="Copiar"/>
          </div>
          <img src="" alt="QR CODE DA CONTA BANCÁRIA PARA TRANSAÇÃO"/>
          
          </div>
        </section>
        <section className="w-[400px] h-fit bg-[#FFDFC4] rounded-lg py-4">
        <h1 className="text-center font-nunito text-2xl font-medium py-2 text-azul-dark">TED ou depósito em conta</h1>
        <div className="py-2 px-4 text-sm">
          <p>Banco: </p>
          <p>Agência: </p>
          <p>Conta-corrente: </p>
          <p>Associação: </p>
          <p>CNPJ: </p>
        </div>
        
        </section>
        <Button color="#FFC55E" tamanho="111" altura="50" fontSize="15" textColor="#FFFFFF" onClick={onClose} titulo="Fechar" />
      </div>
    </div>
  );
}
