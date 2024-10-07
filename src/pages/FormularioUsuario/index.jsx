import Botao from "@/components/common/Button";
import FormGroup from "@/components/common/FormGroup";
import SidebarUsuario from "@/components/layout/SidebarUser";
import CadastroData from "@/mocks/stepFormRegister";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const FormularioUsuario = () => {
  const firstStepData = CadastroData[1];

  const renderForm = (stepData) => {
    return stepData.formGroups.map((formGroup, index) => (
      <FormGroup
        key={index}
        title={formGroup.title}
        column={formGroup.column}
        fields={formGroup.fields}
        radioControl={formGroup.radioControl}
      />
    ));
  };
  return (
    <>
      <section className="flex">
        <SidebarUsuario />
        <div className="flex flex-col gap-4 w-full h-full justify-center items-center mb-40 ">
          <div className="flex items-center justify-between w-full px-20">
            <h1 className="text-3xl font-nunito py-10 text-azul-dark font-medium text-center">
              Meu perfil
            </h1>
            <Botao
              tamanho="120"
              altura="50"
              color="#4C8EB5"
              titulo="Editar"
              textColor="#FFFFFF"
              icon={faPenToSquare}
              // margin="40px"
            />
          </div>
          {renderForm(firstStepData)}
          <div className="flex items-center justify-between w-full px-20 ">
            <Botao
              tamanho="120"
              altura="50"
              color="#EC5A49"
              titulo="Cancelar"
              textColor="#FFFFFF"
            />
            <Botao
              tamanho="120"
              altura="50"
              color="#A9B949"
              titulo="Salvar"
              textColor="#FFFFFF"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FormularioUsuario;
