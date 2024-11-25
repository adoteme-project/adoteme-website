import Card from "@/components/common/Card";

const dataPet = {
    "id": 1,
    "nome": "NOHA",
    "idade": "2 anos",
    "imagem": "",
    "distancia": "600m",
    "porte": "grande",
    "sexo": "Macho",
    "especie": "gato",
    "personalidade": {
        "energia": 5,
        "inteligencia": 4,
        "obediente": 3,
        "sociabilidade": 4,
        "territorial": 2,
        "tolerante": 5,
        "brincalhao": 3
    }
}

const Aplicacao = () => {
    return (
        <section className="flex flex-row">
            <div className="w-full py-20 px-16">
                <h1 className="text-center font-nunito font-medium text-3xl pb-16">Minhas Aplicações</h1>
                <div className="w-full grid grid-cols-4 gap-8">
                    <Card data={dataPet} colorBg={'#FFC55E'} tipoCard='animal'  />
                </div>
            </div>
        </section>
    );
};

export default Aplicacao;
