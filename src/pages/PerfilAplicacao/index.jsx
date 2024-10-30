import SideBarUsuario from "@/components/layout/SidebarUser";


const Aplicacao = () => {


    return (
        <section className="flex flex-row">
            <div className="w-full py-20 px-16">
                <h1 className="text-center font-nunito font-medium text-3xl pb-16">Minhas Aplicações</h1>
                <div className="w-full grid grid-cols-4 gap-8">
                    <div className="bg-beje shadow-md w-64 p-2">
                        <div className="bg-cinza w-full h-44"/>
                        <h3> Nome </h3>
                        <p> Raça </p>
                        <p> Data </p>
                        <p> Situação de aprovação </p>
                    </div>
                    <div className="bg-beje shadow-md w-64 p-2">
                        <div className="bg-cinza w-full h-44"/>
                        <h3> Nome </h3>
                        <p> Raça </p>
                        <p> Data </p>
                        <p> Situação de aprovação </p>
                    </div>
                    <div className="bg-beje shadow-md w-64 p-2">
                        <div className="bg-cinza w-full h-44"/>
                        <h3> Nome </h3>
                        <p> Raça </p>
                        <p> Data </p>
                        <p> Situação de aprovação </p>
                    </div>
                    <div className="bg-beje shadow-md w-64 p-2">
                        <div className="bg-cinza w-full h-44"/>
                        <h3> Nome </h3>
                        <p> Raça </p>
                        <p> Data </p>
                        <p> Situação de aprovação </p>
                    </div>
                    <div className="bg-beje shadow-md w-64 p-2">
                        <div className="bg-cinza w-full h-44"/>
                        <h3> Nome </h3>
                        <p> Raça </p>
                        <p> Data </p>
                        <p> Situação de aprovação </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aplicacao;
