import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PageTitle from "@/components/layout/PageTitle";
import OngAuthContext from "@/context/AuthOngProvider";
import "react-toastify/dist/ReactToastify.css"; 
import { useNotification } from "@/context/NotificationProvider";

const OngDashboard = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [inputYear, setInputYear] = useState(String(new Date().getFullYear()));
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const { authOng } = useContext(OngAuthContext);
  const { error, warn } = useNotification();

  const ongId = authOng?.userData?.ongId;

  useEffect(() => {
    if (!ongId) {
      console.log("id da ong não encontrado");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/adocoes/dados-adocao-dashboard/${ongId}`, {
          params: { ano: selectedYear },
        });
        setData(response.data);
      } catch (err) {
        console.log(err)
        error("Erro ao carregar os dados da dashboard. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ongId, selectedYear]);

  const handleYearInput = (e) => {
    setInputYear(e.target.value);
  };

  const handleYearBlur = () => {
    const year = parseInt(inputYear, 10);
    const currentYear = new Date().getFullYear();

    if (year >= 2000 && year <= currentYear) {
      setSelectedYear(year);
    } else {
      warn("Digite um ano válido entre 2000 e o ano atual.");
      setInputYear(String(selectedYear));
    }
  };

  const filteredData = selectedMonth === "All" ? data : data.filter((d) => d.mes === selectedMonth);

  if (loading) {
    return <div>Carregando dados da Dashboard...</div>;
  }

  if (!ongId) {
    return <div>Erro: ID da ONG não encontrado. Faça login novamente.</div>;
  }

  return (
    <>
      <PageTitle title="Dashboard" />

      {/* <ToastContainer /> */}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <label style={{ marginRight: "8px", fontWeight: "bold" }}>Ano:</label>
          <input
            type="number"
            value={inputYear}
            onChange={handleYearInput}
            onBlur={handleYearBlur}
            placeholder="Digite o ano"
            style={{
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              width: "120px",
              textAlign: "center",
            }}
          />
        </div>

        <select
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
          style={{
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            width: "200px",
            color: "#555",
          }}
        >
          <option value="All">Todos os meses</option>
          {data.map((d) => (
            <option key={d.mes} value={d.mes}>
              {d.mes.charAt(0).toUpperCase() + d.mes.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis yAxisId="left" label={{ value: "Total", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Taxa de Conversão %", angle: 90, position: "insideRight" }} />
          <Tooltip />
          <Legend />

          <Bar yAxisId="left" dataKey="totalAplicacoes" fill="#B4E1DF" name="Total Aplicações" />
          <Bar yAxisId="left" dataKey="totalAdocoes" fill="#78B7E5" name="Total Adoções" />

          <Line yAxisId="right" type="monotone" dataKey="taxaConversao" stroke="#3B5F8F" name="Taxa de Conversão %" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default OngDashboard;
