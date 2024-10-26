import Input from "@/components/common/Input";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PetInfoStep = () => {

    const methods = useForm()
  const navigate = useNavigate();

  const saveData = () => {
    navigate("/teste");
  };

  return (
    <>
      <h1 className="text-center text-azul-main font-nunito text-2xl font-semibold">
        Informações do Pet
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(saveData)}>
          <fieldset className="grid grid-cols-2 gap-10 w-full">
            <Input label="Nome" type="text" name="nomePet" placeholder="Nome" />
            <Input label="Sexo" type="select" name="sexo" placeholder="Sexo" />
          </fieldset>
        </form>
      </FormProvider>
    </>
  );
};

export default PetInfoStep;
