import Checkbox from "@/components/feature/InputsType/Checkbox";
import Input from "@/components/common/Input";
import Select from "@/components/feature/InputsType/Select";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "../../InputsType/TextArea";
import RatingInput from "../../InputsType/RatingInput";
import { useState } from "react";
import { racasCachorro, racasGato } from "@/mocks/racasMocks";

const PetInfoStep = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [racaOpritons, setRacaOptions] = useState(racasCachorro);

  const handleEspecieChange = (event) => {
    const especieSelecionada = event.target.value;
    console.log(especieSelecionada);
    if (especieSelecionada === "CACHORRO") {
      setRacaOptions(racasCachorro);
    } else if (especieSelecionada === "GATO") {
      setRacaOptions(racasGato);
    } else {
      setRacaOptions();
    }
  };

  const saveData = () => {
    console.log("enviou")
    navigate("/ong/cadastrar-pet/abrigo/abrigo-taxa");
  };

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold">
        Informações do Pet
      </h1>
      <FormProvider {...methods}>
        <form className="w-full flex flex-col gap-8" onSubmit={methods.handleSubmit(saveData)}>
          <fieldset className="grid grid-cols-2 gap-6 w-full">
            <Input label="Nome" type="text" name="nomePet" placeholder="Nome" />

            <Select
              label="Sexo"
              name="sexo"
              options={[
                { label: 'Masculino', value: 'masculino' },
                { label: 'Feminino', value: 'feminino' },
              ]}
            />

            <Select
              label="Especie"
              name="especie"
              options={[
                { label: 'Cachorro', value: 'CACHORRO' },
                { label: 'Gato', value: 'GATO' }
              ]}
              onChange={handleEspecieChange}
            />

            <Select
              label="Porte"
              name="porte"
              options={[
                { label: 'Grande', value: 'grande' },
                { label: 'Médio', value: 'medio' },
                { label: 'Pequeno', value: 'pequeno' }
              ]}
            />

            <Select
              label="Raça"
              name="raca"
              options={racaOpritons}
            />

            <Input label="Cor" type="text" name="cor" placeholder="Cor" />
            <Input label="Ano de Nascimento" type="date" name="anoNascimento" />
            <Input label="Tamanho do Pelo" name="tamanhoPelo" />
            <Checkbox label="Castrado ?" name="castrado" />
            <TextArea label="Descrição" name="descricao" rows={5} />
          </fieldset>


            <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Personalidade </h1>
            <div className="w-full flex justify-around">
              <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="sociavel" title="Sociável" />
              <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="obediente" title="Obediente" />
              <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="inteligente" title="Inteligente" />
              <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="tolerante" title="Tolerante" />
              <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="territorial" title="Territorial" />
            </div>

          <div className="w-full flex justify-center">
            <nav className="w-[25%] flex justify-center gap-8">
              <Link to="/ong/cadastrar-pet/abrigo/abrigo-imagens" className="bg-amarelo-select px-4 py-3 text-center rounded-md text-branco w-full"> Voltar </Link>
              <button type="submit" className="bg-verde px-4 py-3 rounded-md text-center text-branco w-full"> Continuar </button>
            </nav>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PetInfoStep;