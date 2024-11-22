import React from "react";
import Image from "next/image";
import thiagoFoto from "../../../public/assets/images/thiago.jpeg";
import renanFoto from "../../../public/assets/images/renan.jpg";
import celsoFoto from "../../../public/assets/images/celso.jpg";
import "./contact.css";
import "../../../public/assets/css/responsive/responsive-contato.css";

const ContatoPage: React.FC = () => {
  const integrantes = [
    {
      nome: "Thiago Moreno Matheus",
      rm: "554507",
      github: "https://github.com/deaffx",
      linkedin: "https://www.linkedin.com/in/deaffx",
      foto: thiagoFoto,
    },
    {
      nome: "Renan Olivi de Moura",
      rm: "557680",
      github: "https://github.com/RenanMouraa",
      linkedin: "https://www.linkedin.com/in/renan-olivi-74496932b",
      foto: renanFoto,
    },
    {
      nome: "Celso Canaveze Teixeira Pinto",
      rm: "556118",
      github: "https://github.com/celsoCanaveze",
      linkedin: "https://www.linkedin.com/in/celso-canaveze-56b552144",
      foto: celsoFoto,
    },
  ];

  return (
    <div className="container-1">
      <div className="main-contato">
        <div className="profile-menu-contato">
          <h2>Conheça os Integrantes</h2>
          <div className="profiles-wrapper">
            {integrantes.map((integrante, index) => (
              <div key={index} className="profile-card">
                <div className="profile-image">
                  <Image
                    src={integrante.foto}
                    alt={`Foto de ${integrante.nome}`}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="profile-infos">
                  <h3>{integrante.nome}</h3>
                  <p>RM: {integrante.rm}</p>
                  <p>Turma 1TDSA</p>
                </div>
                <div className="profile-links">
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                  {integrante.linkedin && (
                    <a
                      href={integrante.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/deaffx/BluewaveGs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório do GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
