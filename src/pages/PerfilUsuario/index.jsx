import Botao from "@/components/common/Button";
import FormGroup from "@/components/common/FormGroup";
import CadastroFoto from "@/components/feature/UploadImage/RegisterImage";
import useCep from "@/hooks/useCep";
import { formMeuPerfilDados } from "@/mocks/stepFormRegister";
import { RegistrationAdotanteSchema } from "@/utils/formValidations";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import AuthContext from "@/context/AuthProvider";
import { getUserById } from "@/services/adotanteAPI";

const PerfilUsuario = () => {
  const { auth } = useContext(AuthContext);
  const formsDadosUsuario = formMeuPerfilDados.find((step) => step.step === 1);
  const [dadosPerfil, setDadosPerfil] = useState({});

  const methods = useForm({
    resolver: zodResolver(RegistrationAdotanteSchema),
    defaultValues: {
      nome: "",
      email: "",
      dataNascimento: "1999-02-02",
      telefone: "",
      cep: "",
      numero: ""
    }
  });

  const {
    register,
    setValue,
    reset,
    control,
    getValues,
    formState: { errors },
  } = methods;

  const [editando, setEditando] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const { loading } = useCep(control, setValue);

  const fetchUserData = async () => {
    try {
      const response = await getUserById(auth.userData.id);
      const userData = response.data;
      setDadosPerfil(userData);
    } catch (error) {
      console.error("Erro ao buscar dados do adotante: ", error);
    }
  };

  useEffect(() => {
    if (auth.userData?.id && auth.token) {
      fetchUserData();
    }
  }, [auth]);


  // Atualizar o formulário com os dados do usuário assim que "dadosPerfil" for carregado
  useEffect(() => {
    if (dadosPerfil) {
      reset({
        nome: dadosPerfil.nome || "",
        email: dadosPerfil.email || "",
        dataNascimento: dadosPerfil.dataNascimeto || "2002-02-02",
        telefone: dadosPerfil.telefone || "",
        cep: dadosPerfil.endereco?.cep || "",
        endereco: dadosPerfil.endereco?.bairro || "",
        cidade: dadosPerfil.endereco?.cidade || "",
        estado: dadosPerfil.endereco?.estado || "",
        numero: dadosPerfil.endereco?.numero || ""
      });
    }
  }, [dadosPerfil, reset]);

  const iniciarEdicao = () => {
    setInitialValues(getValues());
    setEditando(true);
  };

  const cancelarEdicao = () => {
    reset(initialValues);
    setEditando(false);
  };

  const salvarEdicao = () => {
    console.log("Salvando alterações...");
    setEditando(false);
  };

  return (

    <div className="flex flex-col items-center gap-8 h-full px-16 py-8">
      <div className="flex flex-col gap-8 items-center justify-between">
        <h1 className="text-3xl font-nunito text-azul-dark font-medium text-center">
          Meu perfil
        </h1>
        <CadastroFoto control={control} userImage={dadosPerfil.urlFoto} tamanho="150px" altura="150px" />
      </div>

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
        <div className="flex items-center justify-between w-full px-20 py-10">
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
  );
};

export default PerfilUsuario;