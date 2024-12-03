import Botao from "@/components/common/Button";
import FormGroup from "@/components/common/FormGroup";
import AuthContext from "@/context/AuthProvider";
import { formQuestionsAdotante } from "@/mocks/stepFormRegister";
import { getUserAdotanteFormulario, putAdotanteFormulario } from "@/services/adotanteAPI";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PerfilUsuario = () => {
  const [editando, setEditando] = useState(false);
  const [dadosForm, setDadosForm] = useState({});
  const { auth } = useContext(AuthContext);
  const formQuestions = formQuestionsAdotante.find(step => step.step === 2);
  const methods = useForm({
    defaultValues: {
      moraEmCasa: '',
      temPet: '',
      temCrianca: '',
      moradoresConcordam: '',
      seraResponsavel: '',
      isTelado: '',
      casaPortaoAlto: '',
    },
  });

  const { control, getValues, reset } = methods;

  const [initialValues, setInitialValues] = useState({});

  const iniciarEdicao = () => {
    setInitialValues(getValues());
    setEditando(true);
  };

  const cancelarEdicao = () => {
    methods.reset(initialValues);
    setEditando(false);
  };

  const salvarEdicao = async () => {
    try{
      debugger
      const valoresAtualizados = getValues();
      console.log("Salvando alterações...");

      const valoresConvertidos = {
        casaPortaoAlto: valoresAtualizados.casaPortaoAlto === "true" || valoresAtualizados.casaPortaoAlto === true,
      isTelado: valoresAtualizados.isTelado === "true" || valoresAtualizados.isTelado === true,
      moraEmCasa: valoresAtualizados.moraEmCasa === "true" || valoresAtualizados.moraEmCasa === true,
      moradoresConcordam: valoresAtualizados.moradoresConcordam === "true" || valoresAtualizados.moradoresConcordam === true,
      seraResponsavel: valoresAtualizados.seraResponsavel === "true" || valoresAtualizados.seraResponsavel === true,
      temCrianca: valoresAtualizados.temCrianca === "true" || valoresAtualizados.temCrianca === true,
      temPet: valoresAtualizados.temPet === "true" || valoresAtualizados.temPet === true,
      };

      await putAdotanteFormulario(auth?.userData?.id, valoresConvertidos);

      setDadosForm(valoresConvertidos)

      toast.success("Formulário atualizado com sucesso!");
    }catch(error){
      console.error("Erro ao salvar alterações:", error);
      toast.error("Ocorreu um erro ao salvar as alterações. Tente novamente.");
    }finally{
      setEditando(false);
    }
  };

  useEffect(() => {
    const fetchFormulario = async (id) => {
      try {
        const response = await getUserAdotanteFormulario(id);
        
        console.log(response.data);

        setDadosForm(response.data);

      } catch (err) {
        console.log("Erro:", err);
      }
    }

    fetchFormulario(auth?.userData?.id);
  },[auth?.userData])

  useEffect(() => {
    if (dadosForm) {
      reset({
        moraEmCasa: dadosForm.moraEmCasa || false,
        temPet: dadosForm.temPet || false,
        temCrianca: dadosForm.temCrianca || false,
        moradoresConcordam: dadosForm.moradoresConcordam || false,
        seraResponsavel: dadosForm.seraResponsavel || false,
        isTelado: dadosForm.isTelado || false,
        casaPortaoAlto: dadosForm.casaPortaoAlto || false,
      });
    }
  }, [dadosForm, reset]);

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center w-8/12">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-nunito py-10 text-azul-dark font-medium text-center">
            Meu formulário
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
