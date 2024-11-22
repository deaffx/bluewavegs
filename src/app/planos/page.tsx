"use client";
import React from "react";
import PlanoList from "../../components/PlanoList";
import BotaoPlano from "../../components/BotaoPlano";
import "./planos.css";

const planos = [
  {
    nome: "Plano Básico Ecológico",
    descricao:
      "Ideal para residências pequenas que buscam otimizar o consumo de energia com fontes renováveis.",
    energiaEconomizada: "Até 20% de economia",
    preco: "R$ 29,99/mês",
    onClick: () => alert("Plano Básico Ecológico escolhido!"),
  },
  {
    nome: "Plano Intermediário Sustentável",
    descricao:
      "Para empresas de pequeno porte que desejam aumentar sua eficiência energética e reduzir custos.",
    energiaEconomizada: "Até 40% de economia",
    preco: "R$ 59,99/mês",
    onClick: () => alert("Plano Intermediário Sustentável escolhido!"),
  },
  {
    nome: "Plano Avançado Verde",
    descricao:
      "Plano premium para grandes consumidores de energia, com ênfase em sustentabilidade e redução de pegada de carbono.",
    energiaEconomizada: "Até 60% de economia",
    preco: "R$ 99,99/mês",
    onClick: () => alert("Plano Avançado Verde escolhido!"),
  },
];

const PlanosPage: React.FC = () => {
  return (
    <div className="planos-page">
      <h1>Escolha o Plano de Economia de Energia Sustentável</h1>
      <p>
        Descubra como nossos planos podem ajudar sua casa ou empresa a
        economizar energia e contribuir com o meio ambiente.
      </p>
      <PlanoList planos={planos} />
      <BotaoPlano
        texto="Ver mais detalhes sobre energia sustentável"
        onClick={() =>
          alert("Ver mais detalhes sobre os planos de energia sustentável!")
        }
      />
    </div>
  );
};

export default PlanosPage;
