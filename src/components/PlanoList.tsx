import React from "react";
import PlanoCard from "./PlanoCard";

interface Plano {
  nome: string;
  descricao: string;
  energiaEconomizada: string;
  preco: string;
  onClick: () => void;
}

interface PlanoListProps {
  planos: Plano[];
}

const PlanoList: React.FC<PlanoListProps> = ({ planos }) => {
  return (
    <div className="plano-list">
      {planos.map((plano, index) => (
        <PlanoCard
          key={index}
          nome={plano.nome}
          descricao={plano.descricao}
          energiaEconomizada={plano.energiaEconomizada}
          preco={plano.preco}
          onClick={plano.onClick}
        />
      ))}
    </div>
  );
};

export default PlanoList;
