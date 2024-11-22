import React from "react";

interface PlanoCardProps {
  nome: string;
  descricao: string;
  energiaEconomizada: string;
  preco: string;
  onClick: () => void;
}

const PlanoCard: React.FC<PlanoCardProps> = ({
  nome,
  descricao,
  energiaEconomizada,
  preco,
  onClick,
}) => {
  return (
    <div className="plano-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p>
        <strong>Economia de energia:</strong> {energiaEconomizada}
      </p>
      <span>{preco}</span>
      <button onClick={onClick}>Escolher Plano</button>
    </div>
  );
};

export default PlanoCard;
