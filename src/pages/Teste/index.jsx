import MultiStepForm from "@/components/feature/MultiStep/MultiStepForm";
import AuthContext from "@/context/AuthProvider";
import { useContext } from "react";

const Teste = () => {
  const { logout } = useContext(AuthContext);


  return (
    <>
      <div className="w-[90%] ml-10 mt-10">
        <MultiStepForm currentStep={2}/>
        <button onClick={logout} className="bg-azul-main p-4 text-branco">
          Logout
        </button>
      </div>

    </>
  );
};

export default Teste;