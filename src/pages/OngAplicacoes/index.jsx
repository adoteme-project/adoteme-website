import InputOng from "@/components/common/InputOng";
import NoContect from "@/components/layout/NoContent";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";

const OngAplicacoes = () => {
    return (
        <>
          <PageTitle title="Aplicações">
            <button className="font-nunito px-3 py-2 rounded-lg bg-azul-main text-branco">Exportar registros</button>
          </PageTitle>
          <SearchLayout numberResults={0} registerName="Aplicações">
            <InputOng />
          </SearchLayout>
          <NoContect/>
        </>
      );
}


export default OngAplicacoes;