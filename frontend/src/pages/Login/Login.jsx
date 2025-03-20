import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";
import library from "../../assets/library.png";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!email || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Simulação de login bem-sucedido
    console.log("Dados do formulário:", { email, senha });
    setError(""); // Limpa mensagens de erro
    navigate("/home"); // Redireciona para a Home após o login
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

            {error && <p className="error-message">{error}</p>} {/* Exibe mensagens de erro */}

            <div className="forgot-password">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
            </div>

            <Button type="submit">Entrar</Button>

            <div className="register-link">
              <p>
                Não tem uma conta?{" "}
                <a
                  href="/cadastrar"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/cadastrar");
                  }}
                >
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