import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RedefinirSenha = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/redefinicao-senha/request-code", { email });
      toast.success("Código de verificação enviado com sucesso! Verifique seu e-mail.", {
        autoClose: 3000,
        onClose: () => navigate("/login/inserir-codigo", { state: { email } }),
      });
    } catch (err) {
      if (err.response?.status === 404) {
        toast.error("E-mail não encontrado. Verifique se foi digitado corretamente.");
      } else {
        toast.error("Não foi possível enviar o código de verificação. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Redefinição de senha
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Insira o e-mail do usuário para a recuperação de senha. O sistema irá enviar o e-mail de confirmação caso o usuário esteja validado.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-[#EC5A49] hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
              onClick={() => navigate("/")}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#A9B949] hover:bg-[#95A344] text-white font-medium py-2 px-4 rounded-lg"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RedefinirSenha;
