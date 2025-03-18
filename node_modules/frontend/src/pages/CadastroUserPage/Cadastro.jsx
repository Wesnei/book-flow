import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Cadastro.css";
import library from "../../assets/library.png"; 
import Navbar from "../../components/Navbar/Navbar";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", {
      nome,
      email,
      senha,
      confirmarSenha,
    });
    // aqui vamos adicionar a lógica para o backend
  };

  return (
    <div className="cadastro-wrapper">
      <Navbar />
      <img src={library} alt="livraria" className="imagem-lado" />
      <div className="cadastro-container">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <FormInput
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>

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

          <div className="form-group">
            <label>Confirmar senha</label>
            <FormInput
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
