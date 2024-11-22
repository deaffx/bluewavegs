import Image from "next/image";
import logoS from "../../../public/assets/images/logo-bluewave.png";
import "./register.css";
import "../../../public/assets/css/responsive/responsive-register.css";

const Cadastro = () => {
  return (
    <main className="main">
      <section className="register-menu">
        <Image src={logoS} className="logo" alt="Logo" />
        <form className="register-form">
          <input type="text" placeholder="Usuário" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <input
            type="password"
            placeholder="Confirme a senha"
            className="input"
          />
          <input type="submit" value="CADASTRAR" className="register-btn" />
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
