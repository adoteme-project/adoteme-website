import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdicionarUsuario = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    funcao: "",
    celular: "",
    telefone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Dados do usuário:", formData);
    alert("Usuário salvo com sucesso (simulação)!");
    navigate(-1); 
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
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center border">
              <span className="text-gray-500 text-sm">Sem imagem</span>
            </div>
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
                name="funcao"
                value={formData.funcao}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#FFC55E] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC55E]"
              >
                <option value="">Selecione uma função</option>
                <option value="admin">Administrador</option>
                <option value="editor">Funcionário</option>
                <option value="viewer">Voluntário</option>
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
