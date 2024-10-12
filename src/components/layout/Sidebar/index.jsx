
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 flex flex-col justify-between p-4">

      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 bg-gray-400 rounded-full mb-4"></div>
        <h2 className="text-lg font-bold">Nome empresa</h2>
      </div>

      
      <div className="flex flex-col flex-grow space-y-4">
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">📊</span>
          <span>Dashboard</span>
        </div>
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">🐾</span>
          <span>Pets</span>
        </div>
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">📱</span>
          <span>Aplicações</span>
        </div>
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">📞</span>
          <span>Contatos</span>
        </div>
      </div>

      
      <div className="space-y-4">
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">⚙️</span>
          <span>Configurações</span>
        </div>
        <div className="flex items-center bg-gray-300 p-3 rounded hover:bg-gray-400 cursor-pointer">
          <span className="mr-3">🚪</span>
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
