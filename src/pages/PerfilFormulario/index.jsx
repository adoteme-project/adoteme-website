import Botao from "@/components/common/Button";
import FormGroup from "@/components/common/FormGroup";
import { formQuestionsAdotante } from "@/mocks/stepFormRegister";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const PerfilUsuario = () => {
  const [editando, setEditando] = useState(false);
  const formQuestions = formQuestionsAdotante.find(step => step.step === 2);
  const methods = useForm({
    defaultValues: {
      casaApartamento: '',
      outrosPets: '',
      criancas: '',
      acordo: '',
      outraPessoa: '',
      telada: '',
      portao: '',
    },
  });

  const { control, getValues } = methods;

  const [initialValues, setInitialValues] = useState({});

  const iniciarEdicao = () => {
    setInitialValues(getValues());
    setEditando(true);
  };

  const cancelarEdicao = () => {
    methods.reset(initialValues);
    setEditando(false);
  };

  const salvarEdicao = () => {
    console.log("Salvando alterações...");
    setEditando(false);
  };

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center w-8/12">
        <div className="flex items-center justify-between w-full px-20">
          <h1 className="text-3xl font-nunito py-10 text-azul-dark font-medium text-center">
            Meu perfil
          </h1>
          {!editando && (
            <Botao
              tamanho="120"
              altura="50"
              color="#4C8EB5"
              titulo="Editar"
              textColor="#FFFFFF"
              icon={faPenToSquare}
              onClick={iniciarEdicao}
            />
          )}
        </div>
        <FormProvider {...methods}>
          {formQuestions.formGroups.map((formGroup, index) => (
            <FormGroup
              key={index}
              title={formGroup.title}
              column={formGroup.column}
              radioControl={formGroup.radioControl}
              editMode={editando}
              control={control}
            />
          ))}
        </FormProvider>
        {editando && (
          <div className="flex items-center justify-between w-full px-20 mt-4">
            <Botao
              tamanho="120"
              altura="50"
              color="#EC5A49"
              titulo="Cancelar"
              textColor="#FFFFFF"
              onClick={cancelarEdicao}
            />
            <Botao
              tamanho="120"
              altura="50"
              color="#A9B949"
              titulo="Salvar"
              textColor="#FFFFFF"
              onClick={salvarEdicao}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PerfilUsuario;
