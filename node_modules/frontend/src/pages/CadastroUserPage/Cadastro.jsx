import React, { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Cadastro.css";
import library from "../../assets/library.png";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      toast.error("As senhas não coincidem!"); 
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username: nome, 
        email: email,
        password: senha,
        confirmPassword: confirmarSenha,
      });

      console.log("Resposta do backend:", response.data);

      toast.success("Cadastro realizado com sucesso!"); 
      alert("Cadastro realizado com sucesso!"); 
      navigate("/"); 
    } catch (error) {
      setErro(error.response?.data?.message || "Erro ao cadastrar usuário.");
      toast.error(error.response?.data?.message || "Erro ao cadastrar usuário."); 
      alert(error.response?.data?.message || "Erro ao cadastrar usuário."); 
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div className="cadastro-page">
      <Navbar />
      <div className="cadastro-wrapper">
        <img src={library} alt="livraria" className="imagem-lado" />
        <div className="cadastro-container">
          <h1>Cadastro</h1>
          {erro && <p className="erro-mensagem">{erro}</p>} 
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
            <div className="register-link">
              <p>
                Já tem uma conta?{" "}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/"); 
                  }}
                >
                  Entre agora
                </a>
              </p>
            </div>
            <Button type="submit">Cadastrar</Button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />  
    </div>
  );
};

export default Cadastro;
