import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { viaCep } from "@/services/configs/axiosConfig";

const useCep = (control, setValue) => {
  const [loading, setLoading] = useState(false);
  const cep = useWatch({ control, name: "cep" });

  useEffect(() => {
    if (cep) {
      setValue("endereco", '');
      setValue("cidade", '');
      setValue("estado", '');
    }

    if (cep && cep.length === 8) {
      const getEndereco = async (cep) => {
        try {
          setLoading(true);
          const { data } = await viaCep.get(`${cep}/json`);
          if (data.erro) {
            console.log("CEP inválido");
            return;
          }
          const endereco = `${data.logradouro}, ${data.bairro}`;
          setValue("endereco", endereco);
          setValue("cidade", data.localidade);
          setValue("estado", data.uf);
        } catch (error) {
          console.log("Erro ao buscar o CEP:", error);
        } finally {
          setLoading(false);
        }
      };
      getEndereco(cep);
    }
  }, [cep, setValue]);

  return { loading };
};

export default useCep;