import SidebarUsuario from "@/components/layout/SidebarUser";
import FormConta from "@/components/section/FormPerfilUser";
import FormPessoal from "@/components/section/FormPerfilUser";

const PerfilUsuario = () => {
    return (
        <>
            <section className="flex">
                <SidebarUsuario />
                <div className="flex flex-col gap-4 px-2 w-full h-full justify-center mb-40 ">
                    <h1 className="text-center text-3xl font-nunito py-10 text-cinza">Meu perfil</h1>
                    <FormConta input1="Nome completo" input2="Senha" input3="E-mail" />
                    <FormPessoal input1="Data de nascimento" input2="Celular" />
                </div>
            </section>


        </>
    );
}

export default PerfilUsuario;