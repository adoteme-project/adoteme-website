import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InserirCodigo = () => {
  const [verificationCode, setVerificationCode] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;

      setVerificationCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      setVerificationCode(pasteData.split(""));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const code = verificationCode.join("");
    if (code.length !== 6) {
      toast.error("O código deve ter 6 dígitos.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/redefinicao-senha/validar-codigo",
        { email, verificationCode: code }
      );
      if (response.data) {
        toast.success("Código validado com sucesso!", {
          autoClose: 3000,
          onClose: () => navigate("/login/redefinir-senha", { state: { email } }),
        });
      } else {
        toast.error("Código inválido ou expirado. Tente novamente.");
      }
    } catch (err) {
      toast.error("Erro ao validar o código. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResending(true);

    try {
      await axios.post("http://localhost:8080/api/redefinicao-senha/request-code", { email });
      toast.success("Código reenviado com sucesso! Verifique seu e-mail.");
    } catch (err) {
      toast.error("Erro ao reenviar o código. Tente novamente.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm rounded-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Redefinição de senha
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          O código de confirmação foi enviado para o seu e-mail. Insira o código abaixo ou clique em Reenviar para receber o e-mail novamente.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" value={email} />
          <div className="flex justify-center space-x-2">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onPaste={index === 0 ? handlePaste : null} 
              />
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className={`bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md ${resending ? "opacity-70" : ""}`}
              onClick={handleResendCode}
              disabled={resending}
            >
              {resending ? "Reenviando..." : "Reenviar código"}
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#A9B949] hover:bg-[#95A344] text-white font-medium py-2 px-4 rounded-md"
            >
              {loading ? "Verificando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InserirCodigo;
