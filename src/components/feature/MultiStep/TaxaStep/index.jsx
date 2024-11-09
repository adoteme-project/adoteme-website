import { Link } from "react-router-dom";
import CurrencyInput from "../../InputsType/CurrencyInput";


const TaxaStep = () => {
    return (
        <div className="w-full flex flex-col gap-10 items-center">
            <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Taxa do Pet </h1>
            <div className="flex flex-col gap-10 justify-center w-1/2" >
                <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                    <span> Não possui taxa de adoção </span>
                    <input className="accent-amarelo h-5 w-5 rounded-sm" type="checkbox" />
                </div>
                <CurrencyInput label="Taxa de Adoção" />
                <div>
                    <h4 className="font-semibold text-lg"> Visibilidade do Pet </h4>
                    <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                        <div>
                            <h5 className="font-medium"> Visível </h5>
                            <p className="font-light">
                                Disponibilizar adoção do pet pelo site  publicamente
                            </p>
                        </div>
                        <input className="accent-amarelo h-5 w-5 rounded-sm" type="checkbox" />
                    </div>
                    <div className="border-b-2 border-amarelo-select p-3 w-full flex justify-between items-center">
                        <div>
                            <h5 className="font-medium"> Escondido </h5>
                            <p className="font-light">
                                Pet será cadastrado, mas não estará visível no site
                            </p>
                        </div>
                        <input className="accent-amarelo h-5 w-5 rounded-sm" type="checkbox" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <nav className="w-[25%] flex justify-center gap-8">
                    <Link to="/ong/cadastrar-pet/abrigo/abrigo-informacoes" className="bg-amarelo-select px-4 py-3 text-center rounded-md text-branco w-full"> Voltar </Link>
                    <Link to="/ong/pets" className="bg-verde px-4 py-3 rounded-md text-center text-branco w-full"> Finalizar </Link>
                </nav>
            </div>
        </div>
    )
}

export default TaxaStep;