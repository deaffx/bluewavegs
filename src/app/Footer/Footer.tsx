"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "../../../public/assets/images/facebook.png";
import Instagram from "../../../public/assets/images/instagram.png";
import Twitter from "../../../public/assets/images/twitter.png";
import Whatsapp from "../../../public/assets/images/whatsapp.png";
import Youtube from "../../../public/assets/images/youtube.png";
import LogoFooter from "../../../public/assets/images/logo-bluewave2.png";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="conteudo">
        <Image
          src={LogoFooter}
          alt="Logo Bluewave"
          className="logo"
          width={180}
          height={140}
        />
        <div className="redes-sociais">
          <a href="https://www.facebook.com" target="_blank">
            <Image src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <Image src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Image src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <Image src={Whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <Image src={Youtube} alt="YouTube" />
          </a>
        </div>
        <nav className="menu">
          <Link href="/">Início</Link>
          <Link href="/energia">Energia</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/#faq">Ajuda</Link>
        </nav>
      </div>
      <div className="faixa">
        <div className="left">
          Copyright 2024 by Bluewave | Todos os direitos reservados
        </div>
        <div className="right">
          <a href="/politicas">Termos e Políticas</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
