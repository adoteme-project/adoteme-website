import InputOng from "@/components/common/InputOng";
import PageTitle from "@/components/layout/PageTitle";
import SearchLayout from "@/components/layout/SearchLayout";

const OngPet = () => {
  return (
    <>
      <PageTitle title="Pets" actionName="+ Adicionar pet" />
      <SearchLayout numberResults={20} registerName='Pets'>
        <InputOng />
      </SearchLayout>
    </>
  );
};

export default OngPet;
