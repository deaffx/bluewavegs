import React from "react";

interface BotaoPlanoProps {
  texto: string;
  onClick: () => void;
}

const BotaoPlano: React.FC<BotaoPlanoProps> = ({ texto, onClick }) => {
  return (
    <button className="botao-plano" onClick={onClick}>
      {texto}
    </button>
  );
};

export default BotaoPlano;
