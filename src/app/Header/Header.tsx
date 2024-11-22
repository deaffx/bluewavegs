"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/images/logo-bluewave.png";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="menu">
        <Image
          src={logo}
          alt="Logo Bluewave"
          className="logo"
          width={400}
          height={100}
        />
        <nav id="menu">
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/energia">Energia</Link>
            </li>
            <li>
              <Link href="/planos">Planos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/#faq">Ajuda</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="buttons">
        <Link href="/cadastro" target="">
          <button className="cadastro">Cadastre-se</button>
        </Link>
        <Link href="/login" target="">
          <button className="login">Entrar</button>
        </Link>
      </div>
      <div className="burger-menu">
        <input type="checkbox" id="menu-hamburger" />
        <label htmlFor="menu-hamburger">
          <span className="line"></span>
        </label>
        <div className="menu-mobile">
          <nav className="nav-mobile">
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/energia">Energia</Link>
              </li>
              <li>
                <Link href="/planos">Planos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
              <li>
                <Link href="/#faq">Ajuda</Link>
              </li>
              <li>
                <div className="buttons-mobile">
                  <Link href="/cadastro" target="">
                    <button className="cadastro">Cadastre-se</button>
                  </Link>
                  <Link href="/login" target="">
                    <button className="login">Entrar</button>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
