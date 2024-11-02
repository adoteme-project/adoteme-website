const CurrencyInput = ({label}) => {
    return (
        <div >
            <label className="text-xl font-medium">{label}</label>
            <div className="flex items-center border-2 mt-2 border-amarelo-select rounded-md p-1 w-full">
                <span className="px-3">R$</span>
                <input
                    type="text"
                    placeholder="0.00"
                    className="flex-1 px-2 py-1 border-none focus:outline-none focus:ring-0"
                />
            </div>
        </div>
    )
}


export default CurrencyInput;