import Button from "@/components/common/Button"
import Input from "@/components/common/Input";

const FormPerfilUser = (props) => {
    return (
        <>
            <section className="w-full flex flex-col justify-center items-center">
                    
                <div className="w-[822px] h-[336px] rounded-lg bg-beje flex flex-col">
                    <div className="flex justify-between p-8">
                        <h3 className="font-nunito text-2xl">Dados da conta</h3>
                        <Button tamanho="100" altura="50" color="#4C8EB5" titulo="Editar" textColor="#FFFFFF" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 px-8">
                        <div>
                            <label htmlFor="">{props.input1}</label>
                            <Input tamanho="350" />
                            <label htmlFor="">{props.input2}</label>
                            <Input tamanho="350" />
                        </div>
                        <div>
                            <label htmlFor="">{props.input3}</label>
                            <Input tamanho="350" />
                        </div>
                        <label htmlFor="">{props.input4}</label>
                    </div>
                </div>

            </section>
        </>
    );
}

export default FormPerfilUser;