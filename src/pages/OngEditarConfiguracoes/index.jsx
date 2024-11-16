import { useState, useEffect } from 'react';
import PageTitle from "@/components/layout/PageTitle";

const OngEditarConfiguracoes = () => {
  const [orgData, setOrgData] = useState({
    nome: '',
    descricao: '',
    celular: '',
    telefone: '',
    site: '',
    instagram: '',
    facebook: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/organizacao');
      const data = await response.json();
      setOrgData(data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrgData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const response = await fetch('/api/organizacao', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orgData),
    });

    if (response.ok) {
      alert('Dados salvos com sucesso!');
      setIsEditing(false); 
    } else {
      alert('Erro ao salvar os dados.');
    }
  };

  return (
    <>
      <PageTitle title="Editar Organização" />

      <div className="flex flex-col mt-8 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row gap-8 w-full lg:max-w-3xl lg:mx-auto">
          <h2 className="text-xl font-semibold mb-4 sm:mb-0">Perfil Organização</h2>

          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
            <span className="text-gray-500">Imagem</span>
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
            <div>
              <label className="font-semibold">Site</label>
              <input
                type="text"
                name="site"
                value={orgData.site}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="🌐 Ex: www.ongesperanca.org"
                className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
              />
            </div>

            <div>
              <label className="font-semibold">Instagram</label>
              <input
                type="text"
                name="instagram"
                value={orgData.instagram}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="📷 Ex: @ongesperanca"
                className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
              />
            </div>

            <div>
              <label className="font-semibold">Facebook</label>
              <input
                type="text"
                name="facebook"
                value={orgData.facebook}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="📘 Ex: facebook.com/ongesperanca"
                className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                type="text"
                name="email"
                value={orgData.email}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="✉️ Ex: contato@ongesperanca.org"
                className="p-3 border-2 border-[#FFC55E] rounded-md w-full font-bold"
              />
            </div>
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
    </>
  );
};

export default OngEditarConfiguracoes;
