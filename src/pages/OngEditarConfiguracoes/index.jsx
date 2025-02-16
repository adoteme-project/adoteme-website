import { useState, useEffect, useContext } from "react";
import PageTitle from "@/components/layout/PageTitle";
import OngAuthContext from "@/context/AuthOngProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDadosOng, putEditarDadosOng } from "@/services/ongAPI";

const OngEditarConfiguracoes = () => {
  const { authOng } = useContext(OngAuthContext);
  const ongId = authOng?.userData?.ongId;

  const [orgData, setOrgData] = useState({
    nome: "",
    descricao: "",
    celular: "",
    telefone: "",
    site: "",
    instagram: "",
    facebook: "",
    email: "",
    imagem: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!ongId) {
        console.error("ID da ONG não disponível.");
        return;
      }

      try {
        const response = await getDadosOng(ongId);
        const data = response.data;
        setOrgData(data);
        setPreviewImage(data.imagem);
      } catch (error) {
        console.error("Erro ao buscar dados da ONG:", error);
      }
    };

    fetchData();
  }, [ongId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrgData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!ongId) {
      console.error("ID da ONG não disponível para salvar.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("imagem", newImage);
      Object.keys(orgData).forEach((key) => {
        formData.append(key, orgData[key]);
      });

      const response = await putEditarDadosOng(ongId, formData);

      if (response.ok) {
        toast.success("Dados salvos com sucesso!");
        setIsEditing(false);
      } else {
        toast.error("Erro ao salvar os dados.");
      }
    } catch (error) {
      console.error("Erro ao salvar dados da ONG:", error);
      toast.error("Erro ao salvar os dados.");
    }
  };

  return (
    <>
      <PageTitle title="Editar Organização" />

      <div className="flex flex-col mt-8 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row gap-8 w-full lg:max-w-3xl lg:mx-auto">
          <h2 className="text-xl font-semibold mb-4 sm:mb-0">Perfil Organização</h2>

          <div
            className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg flex items-center justify-center mx-auto sm:mx-0 cursor-pointer relative"
            onClick={() => document.getElementById("fileInput").click()} 
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Imagem da ONG"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-500">Sem imagem</span>
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="flex flex-col gap-4 flex-grow">
            <label className="font-semibold">Nome da Organização</label>
            <input
              type="text"
              name="nome"
              value={orgData.nome}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="🏢 Ex: ONG Esperança"
              className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
            />

            <label className="font-semibold">Descrição</label>
            <textarea
              name="descricao"
              value={orgData.descricao}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="📝 Ex: Organização focada em ajudar animais"
              className="p-3 border-2 border-[#FFC55E] rounded-md w-full h-32 resize-none font-bold"
            />
          </div>
        </div>

        <div className="mt-8 w-full lg:max-w-3xl lg:mx-auto">
          <h2 className="text-lg font-semibold mb-4">Contatos</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Celular</label>
              <input
                type="text"
                name="celular"
                value={orgData.celular}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="📱 Ex: (11) 91234-5678"
                className="p-3 border-2 border-[#FFC55E] rounded-md font-bold"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="font-semibold">Telefone</label>
              <input
                type="text"
                name="telefone"
                value={orgData.telefone}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="📞 Ex: (11) 1234-5678"
                className="p-3 border-2 border-[#FFC55E] rounded-md font-bold"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {["site", "instagram", "facebook", "email"].map((field) => (
              <div key={field}>
                <label className="font-semibold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  name={field}
                  value={orgData[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder={`Ex: ${field === "site" ? "www.ongesperanca.org" : `@ongesperanca`}`}
                  className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8 lg:max-w-3xl lg:mx-auto">
          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 w-full sm:w-auto"
            onClick={() => setIsEditing(false)}
          >
            Voltar
          </button>
          {isEditing ? (
            <button
              className="px-6 py-2 bg-[#B2CF06] text-white rounded-md hover:bg-[#95A344] w-full sm:w-auto"
              onClick={handleSave}
            >
              Salvar
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-[#A9B949] text-white rounded-md hover:bg-[#95A344] w-full sm:w-auto"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default OngEditarConfiguracoes;
