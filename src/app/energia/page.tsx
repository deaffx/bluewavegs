"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import "./dashboard.css";

interface ConsumoEnergia {
  idEstacao: number;
  dataHora: string;
  energiaUtilizada: number;
}

interface MetricasCorrentes {
  voltages: number[];
  currents: number[];
  power: number;
}

interface MetricasDashboard {
  maxPower: number;
  minPower: number;
  averagePower: number;
}

const Dashboard: React.FC = () => {
  const [consumos, setConsumos] = useState<ConsumoEnergia[]>([]);
  const [metricas, setMetricas] = useState<MetricasCorrentes | null>(null);
  const [metricasDashboard, setMetricasDashboard] =
    useState<MetricasDashboard | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Carregar dados de Consumo de Energia
        const consumoData = await fetchData<ConsumoEnergia[]>("/consumo");
        setConsumos(consumoData);

        // Carregar dados de Métricas Correntes
        const metricasData = await fetchData<MetricasCorrentes>(
          "/metricas-correntes"
        );
        setMetricas(metricasData);

        // Carregar dados de Métricas do Dashboard
        const metricasDashboardData = await fetchData<MetricasDashboard>(
          "/metricas-dashboard"
        );
        setMetricasDashboard(metricasDashboardData);
      } catch (error: any) {
        setError(error.message);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>Erro ao carregar dados: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <section className="consumo-section">
        <h2>Consumo de Energia</h2>
        {consumos.length > 0 ? (
          consumos.map((consumo) => (
            <div key={consumo.idEstacao} className="consumo-card">
              <p>ID Estação: {consumo.idEstacao}</p>
              <p>Data/Hora: {consumo.dataHora}</p>
              <p>Energia Utilizada: {consumo.energiaUtilizada} kWh</p>
            </div>
          ))
        ) : (
          <p>Nenhum dado de consumo encontrado.</p>
        )}
      </section>

      <section className="metricas-section">
        <h2>Métricas Correntes</h2>
        {metricas ? (
          <div className="metricas-card">
            <p>Voltagens: {metricas.voltages.join(", ")}</p>
            <p>Correntes: {metricas.currents.join(", ")}</p>
            <p>Potência: {metricas.power} W</p>
          </div>
        ) : (
          <p>Nenhuma métrica disponível.</p>
        )}
      </section>

      <section className="metricas-dashboard-section">
        <h2>Métricas do Dashboard</h2>
        {metricasDashboard ? (
          <div className="metricas-dashboard-card">
            <p>Potência Máxima: {metricasDashboard.maxPower} W</p>
            <p>Potência Mínima: {metricasDashboard.minPower} W</p>
            <p>Potência Média: {metricasDashboard.averagePower} W</p>
          </div>
        ) : (
          <p>Nenhuma métrica do dashboard disponível.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
