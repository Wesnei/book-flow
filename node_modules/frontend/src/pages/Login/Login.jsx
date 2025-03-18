import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";
import library from "../../assets/library.png";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // Inicialize o useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", { email, senha });
  };

  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
        <img src={library} alt="livraria" className="imagem-lado" />
        <div className="login-container">
          <h1>Fazer Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail</label>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <FormInput
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="forgot-password">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
            </div>

            <Button type="submit">Entrar</Button>
            {/* Adicione o link/botão de "Fazer Cadastro" */}
            <div className="register-link">
            <p>
              Não tem uma conta?{" "}
              <a href="/cadastrar" onClick={(e) => {
                e.preventDefault(); // Evita o comportamento padrão do link
                navigate("/cadastrar"); // Redireciona para a página de cadastro
              }}>
                Cadastre-se
              </a>
            </p>
          </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;