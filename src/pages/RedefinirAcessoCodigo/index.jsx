import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const InserirCodigo = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/verify-code", {
        email,
        verificationCode,
      });
      console.log(response.data.message);
      navigate("/login/redefinir-senha");
    } catch (err) {
      setError("Código inválido ou expirado.");
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
          O código de confirmação foi enviado para o seu e-mail. Insira o código abaixo ou clique em Reenviar para receber o e-mail novamente.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" value={email} />
          <div className="flex justify-center space-x-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                value={verificationCode[index] || ""}
                onChange={(e) => {
                  const newCode = verificationCode.split("");
                  newCode[index] = e.target.value;
                  setVerificationCode(newCode.join(""));
                }}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md"
              onClick={() => console.log("Reenviar código")}
            >
              Reenviar código
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            >
              {loading ? "Verificando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InserirCodigo;
