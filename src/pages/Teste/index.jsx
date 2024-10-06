const Teste = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <>
      <h1> Rota privada acessada </h1>
      <button onClick={handleLogout} className="bg-azul-main p-4 text-branco"> Logout </button>
    </>
  );
};

export default Teste;
