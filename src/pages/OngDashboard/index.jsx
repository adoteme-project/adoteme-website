import { useEffect, useState } from "react";
import axios from "axios";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PageTitle from "@/components/layout/PageTitle";

const OngDashboard = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("All");

  useEffect(() => {
    axios.get("/dadosGrafico.json")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const filteredData = selectedMonth === "All" ? data : data.filter(d => d.mes === selectedMonth);

  return (
    <>
      <PageTitle title="Dashboard" />

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
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
            color: "#555"
          }}
        >
          <option value="All">Todos os meses</option>
          {data.map(d => (
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
