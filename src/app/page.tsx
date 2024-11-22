"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import "../../public/assets/css/home.css";
import "../../public/assets/css/responsive/responsive-home.css";

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/#faq") {
      const faqSection = document.getElementById("faq");
      faqSection?.scrollIntoView({ behavior: "smooth" });
    }
    return () => {
      setActiveFAQ(null);
    };
  }, [pathname]);

  const handleFAQClick = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="home">
      <section className="cta">
        <div>
          <Image
            src="/assets/images/wave-energy.jpg"
            alt="Banner"
            width={500}
            height={350}
            className="cta-banner"
          />
        </div>
        <div>
          <h2>
            Energia sustentável,
            <br />a partir do oceano.
          </h2>
          <button className="cadastro" onClick={() => router.push("/cadastro")}>
            Cadastre-se
          </button>
        </div>
      </section>

      <div className="cards-background">
        <section className="cards container mt-5">
          {[
            {
              title: "Sustentabilidade",
              imgSrc: "/assets/images/sustentabilidade.png",
              features: ["Energia limpa", "Renovável", "Redução de carbono"],
            },
            {
              title: "Eficiência",
              imgSrc: "/assets/images/eficiencia.png",
              features: [
                "Alta capacidade",
                "Baixo impacto",
                "Tecnologia moderna",
              ],
            },
            {
              title: "Inovação",
              imgSrc: "/assets/images/inovacao.png",
              features: [
                "Tecnologia de ponta",
                "Oceano como recurso",
                "Energia do futuro",
              ],
            },
          ].map((card, index) => (
            <div className="card" key={index}>
              <Image
                src={card.imgSrc}
                alt={card.title}
                width={60}
                height={60}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  {card.features.map((feature, idx) => (
                    <React.Fragment key={idx}>
                      <Image
                        src="/assets/images/verifica.png"
                        alt={feature}
                        width={20}
                        height={20}
                      />{" "}
                      {feature}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section id="faq" className="custom-section section-1">
        <div className="faq container">
          <div className="right-content">
            <h2>Energia sustentável para um futuro melhor.</h2>
          </div>
          <div className="left-content">
            <Image
              src="/assets/images/suporte.png"
              alt="Suporte"
              width={450}
              height={300}
              className="section-image"
            />
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-left">
            <h3>
              Dúvidas <br /> frequentes
            </h3>
            <p>
              Acesse nossa central de suporte, caso não encontre sua dúvida
              aqui.
            </p>
            <button onClick={() => router.push("/#faq")}>
              Central de suporte
            </button>
          </div>
          <div className="faq-right">
            <ul>
              {[
                "O que é o Bluewave?",
                "Como a energia é gerada?",
                "Qual é o impacto ambiental?",
                "O Bluewave é acessível para empresas?",
                "É possível implementar no Brasil?",
              ].map((question, index) => (
                <li key={index}>
                  <a href="#" onClick={(event) => handleFAQClick(index, event)}>
                    {`0${index + 1} - ${question}`}
                  </a>
                  <p
                    className={`faq-answer ${
                      activeFAQ === index ? "show" : ""
                    }`}
                  >
                    {index === 0 &&
                      "O Bluewave é uma plataforma que transforma a energia de ondas e correntes marinhas em eletricidade limpa e sustentável."}
                    {index === 1 &&
                      "Utilizamos tecnologias inovadoras que captam a energia cinética das ondas e das correntes marinhas, convertendo-a em energia elétrica."}
                    {index === 2 &&
                      "Nosso sistema é projetado para minimizar impactos ambientais, utilizando materiais sustentáveis e técnicas de instalação de baixo impacto."}
                    {index === 3 &&
                      "Sim, o Bluewave é ideal para empresas e comunidades que desejam adotar soluções sustentáveis de energia renovável."}
                    {index === 4 &&
                      "Sim, o Brasil possui um litoral vasto, tornando-o ideal para a implementação de projetos de energia marítima."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="fundo"></div>
    </div>
  );
}
