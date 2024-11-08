import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const NovaSenha = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/set-new-password", { email, newPassword });
      console.log(response.data.message);
      navigate("/login");
    } catch (err) {
      setError("Erro ao redefinir senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm rounded-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Redefinição de senha
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Insira sua nova senha abaixo.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Senha nova</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirmação de senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            >
              {loading ? "Redefinindo..." : "Confirmar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovaSenha;
