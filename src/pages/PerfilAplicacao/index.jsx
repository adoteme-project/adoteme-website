import SideBarUsuario from "@/components/layout/SidebarUser";
import TableComponent from "@/components/layout/Table";

const Aplicacao = () => {
    return (
        <section className="flex flex-row">
            <SideBarUsuario />
            <div className="w-full py-20 px-16">
            <h1 className="text-center font-nunito font-medium text-3xl pb-16">Minhas Aplicações</h1>
                <TableComponent />
            </div>
        </section>
    );
};

export default Aplicacao;
