import Checkbox from "@/components/feature/InputsType/Checkbox";
import Input from "@/components/common/Input";
import Select from "@/components/feature/InputsType/Select";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "../../InputsType/TextArea";
import RatingInput from "../../InputsType/RatingInput";
import { useState, useEffect } from "react";
import { racasCachorro, racasGato } from "@/mocks/racasMocks";
import { useFormState } from "@/context/FormStateProvider";
import { useContextPath } from "@/context/PathContextProvider";

const PetInfoStep = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [racaOptions, setRacaOptions] = useState(racasCachorro);
  const { formState, setFormState } = useFormState();
  const contextPath = useContextPath();

  useEffect(() => {
    methods.reset(formState);
  }, [formState, methods]);

  const handleEspecieChange = (event) => {
    const especieSelecionada = event.target.value;
    setRacaOptions(especieSelecionada === "CACHORRO" ? racasCachorro : racasGato);
  };

  const saveData = (data) => {

    const {energia, inteligencia, obediente, sociabilidade, territorial, tolerante, ...rest} = data;

    const formattedData = {
      ...rest,
      personalidade: {
        energia: energia || 0,
        inteligencia: inteligencia || 0,
        obediente: obediente || 0,
        sociabilidade: sociabilidade || 0,
        territorial: territorial || 0,
        tolerante: tolerante || 0,
      },
    }

    setFormState({ ...formState, ...formattedData });

    if (contextPath === 'abrigo') {
      console.log("Dados do pet do abrigo:", {...formState});
      navigate(`/ong/cadastrar-pet/${contextPath}/${contextPath}-taxa`);
    } else {
      console.log("Dados do pet perdido:", { ...formState, ...data });
      navigate("/ong/pets")
    }

  };

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold">
        Informações do Pet
      </h1>
      <FormProvider {...methods}>
        <form className="w-full flex flex-col gap-8" onSubmit={methods.handleSubmit(saveData)}>
          <fieldset className="grid grid-cols-2 gap-6 w-full">
            <Input label="Nome" type="text" name="nome" placeholder="Nome" />

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
              options={racaOptions}
            />

            <Input label="Idade" type="text" name="anoNascimento" placeholder="Idade" />

            {
            contextPath === 'abrigo' ?
              (<Input label="Data no Abrigo" type="date" name="dataAbrigo" />) : null
            }

            <Checkbox label="Castrado ?" name="isCastrado" />
            <TextArea label="Descrição" name="descricao" rows={5} />
          </fieldset>

          {contextPath === 'abrigo' ? (
            <>
              <h1 className="text-center text-azul-main font-nunito text-3xl font-semibold"> Personalidade </h1><div className="w-full flex justify-around">
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="energia" title="Energia" />
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="sociabilidade" title="Sociável" />
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="obediente" title="Obediente" />
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="inteligencia" title="Inteligente" />
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="tolerante" title="Tolerante" />
                <RatingInput color={'#FFBB1C'} control={methods.control} disabled={false} name="territorial" title="Territorial" />
              </div>
            </>) : null
          }

          <div className="w-full flex justify-center">
            <nav className="w-[25%] flex justify-center gap-8">
              <Link to={`/ong/cadastrar-pet/${contextPath}/${contextPath}-imagens`} className="bg-amarelo-select px-4 py-3 text-center rounded-md text-branco w-full"> Voltar </Link>
              <button type="submit" className="bg-verde px-4 py-3 rounded-md text-center text-branco w-full">
                {contextPath === 'abrigo' ? "Continuar" : 'Enviar'}
              </button>
            </nav>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PetInfoStep; 