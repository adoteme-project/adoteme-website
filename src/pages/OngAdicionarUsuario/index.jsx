import OngAuthContext from "@/context/AuthOngProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCriarUsuarioOng } from "@/services/onguserAPI";

const AdicionarUsuario = () => {
  const navigate = useNavigate();
  const { authOng } = useContext(OngAuthContext);

  const ongId = authOng?.userData?.ongId

  const [formData, setFormData] = useState({
    nome: "",
    role: "",
    celular: "",
    telefone: "",
    email: "",
    imagem: null,
    senha: "",
    ongId: ongId
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          imagem: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validatePassword = (senha) => {
    const senhaRegex = /[A-Z]/; 
    if (senha.length < 8) {
      toast.info("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }
    if (!senhaRegex.test(senha)) {
      toast.info("A senha deve conter pelo menos uma letra maiúscula.");
      return false;
    }
    return true;
  };

  const validateForm = (data) => {
    const requiredFields = ["nome", "email", "senha"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.info(`Por favor, preencha o campo: ${field}`);
        return false;
      }
    }

    if (!validatePassword(data.senha)) {
      return false;
    }

    return true;
  };


  const handleSave = async () => {
    if (!validateForm(formData)) return;

    try {
      const response = await postCriarUsuarioOng(formData);

      if (response.status === 201) {
        console.log("Usuário adicionado com sucesso!");
        navigate(-1);
      }
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      toast.error("Erro ao salvar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-amarelo">Adicionar Usuário</h1>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md border border-amarelo">
        <h1 className="text-2xl text-preto mb-4">Perfil Usuário</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <label htmlFor="imagemUpload" className="cursor-pointer">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center border">
                {formData.imagem ? (
                  <img
                    src={formData.imagem}
                    alt="Imagem do usuário"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500 text-sm text-center">Clique para adicionar imagem</span>
                )}
              </div>
            </label>
            <input
              id="imagemUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div className="w-full lg:w-2/3">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Nome do Usuário
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Digite o nome"
                value={formData.nome}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Função
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              >
                <option value="">Selecione uma função</option>
                <option value="ADMIN">Administrador</option>
                <option value="MODERATOR">Gerente de Staff</option>
                <option value="USER">Voluntário</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-preto mb-4">Contatos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Celular
              </label>
              <input
                type="text"
                name="celular"
                placeholder="📱 (11) 999999999"
                value={formData.celular}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                placeholder="📞 (11) 999999999"
                value={formData.telefone}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="✉️ email@exemplo.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                placeholder="Digite uma senha"
                value={formData.senha}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              />
            </div>
            <input type="hidden" name="ongId" value={formData.ongId} />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-amarelo text-white px-6 py-3 rounded-lg hover:bg-amarelo-hover"
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdicionarUsuario;
