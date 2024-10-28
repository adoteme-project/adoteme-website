import Botao from "@/components/common/Button";
import FormGroup from "@/components/common/FormGroup";
import SidebarUsuario from "@/components/layout/SidebarUser";
import CadastroFoto from "@/components/feature/UploadImage/RegisterImage"; 
import useCep from "@/hooks/useCep";
import { formMeuPerfilDados } from "@/mocks/stepFormRegister";
import { RegistrationAdotanteSchema } from "@/utils/formValidations";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getUserById } from "@/services/adotanteAPI";

const PerfilUsuario = () => {
  const { id } = useParams();
  const formsDadosUsuario = formMeuPerfilDados.find((step) => step.step === 1);
  const methods = useForm({
    resolver: zodResolver(RegistrationAdotanteSchema),
  });
  const {
    register,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = methods;

  const [editando, setEditando] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const { loading } = useCep(control, setValue);

  // Função para buscar dados do usuário e preencher o formulário
  const fetchUserData = async () => {
    try {
      const response = await getUserById(id);
      const userData = response.data;

      // Preenchendo o formulário com os dados do usuário
      Object.entries(userData).forEach(([key, value]) => {
        setValue(key, value);
      });
    } catch (error) {
      console.error("Erro ao buscar dados do adotante: ", error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Chama a função ao montar o componente
  }, [id]); // Dependência para chamar novamente caso o id mude

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
    <section className="w-full">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-4 h-full w-8/12 mb-40">
          <h1 className="text-3xl font-nunito py-10 text-azul-dark font-medium text-center">
            Meu perfil
          </h1>
          <div className="flex flex-row-reverse items-center justify-between">
            <CadastroFoto control={control} tamanho="150px" altura="150px" />
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
            {formsDadosUsuario.formGroups.map((formGroup, index) => (
              <FormGroup
                key={index}
                title={formGroup.title}
                column={2}
                fields={formGroup.fields}
                errors={errors}
                register={register}
                editMode={editando}
                isPerfil={true}
              />
            ))}
            {loading && (
              <div className="flex justify-center items-center">
                <MoonLoader speedMultiplier={1} />
              </div>
            )}
          </FormProvider>

          {editando && (
            <div className="flex items-center justify-between w-full px-20">
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
      </div>
    </section>
  );
};

export default PerfilUsuario;
