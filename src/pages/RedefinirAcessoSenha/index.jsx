import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NovaSenha = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    if (newPassword.length < 8 || confirmPassword.length < 8) {
      toast.error("As senhas devem ter no mínimo 8 caracteres.");
      return;
    }
    
    const hasUpperCase = /[A-Z]/.test(newPassword);
    if (!hasUpperCase) {
      toast.error("A senha deve conter pelo menos uma letra maiúscula.");
      return;
    }    

    setLoading(true);

    try {
      const response = await axios.put(
        "http://localhost:8080/api/redefinicao-senha/resetar-senha",
        { email, newPassword }
      );
      toast.success("Senha redefinida com sucesso!", {
        autoClose: 3000,
        onClose: () => navigate("/login"),
      });
    } catch (err) {
      toast.error("Erro ao redefinir senha. Tente novamente.");
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
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#A9B949] hover:bg-[#95A344] text-white font-medium py-2 px-4 rounded-md"
            >
              {loading ? "Redefinindo..." : "Confirmar"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NovaSenha;
