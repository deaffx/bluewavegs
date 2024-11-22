import Image from "next/image";
import logoS from "../../../public/assets/images/logo-bluewave.png";
import "./login.css";
import "../../../public/assets/css/responsive/responsive-login.css";

const Login = () => {
  return (
    <main className="main">
      <section className="login-menu">
        <Image src={logoS} className="logo" alt="Logo" />
        <form className="login-form">
          <input type="text" placeholder="Usuário / Email" className="input" />
          <input type="password" placeholder="Senha" className="input" />
          <input type="submit" value="ENTRAR" className="login-btn" />
        </form>
      </section>
    </main>
  );
};

export default Login;
