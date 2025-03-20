import React, { useState } from 'react';
import './Duvidas.css';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import Footer from '../../components/Footer/Footer';

function Duvidas() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() && descricao.trim()) {
      setEnviado(true);
      console.log('Nome:', nome);
      console.log('Descrição:', descricao);
      setNome('');
      setDescricao('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
    <div className="duvidas-container">
          <MainNavbar />
          <div className="form-container">
              <h2>Envie sua dúvida</h2>
              <form onSubmit={handleSubmit}>
                  <div className="input-group">
                      <label htmlFor="nome">Digite seu Nome</label>
                      <input
                          type="text"
                          id="nome"
                          placeholder="Digite seu nome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          required />
                  </div>

                  <div className="input-group">
                      <label htmlFor="descricao">Descrição da dúvida</label>
                      <textarea
                          id="descricao"
                          placeholder="Descreva sua dúvida..."
                          value={descricao}
                          onChange={(e) => setDescricao(e.target.value)}
                          rows="4"
                          required
                      ></textarea>
                  </div>

                  <button type="submit">Enviar</button>
              </form>
              {enviado && <p className="success-msg">Sua dúvida foi enviada com sucesso!</p>}
          </div>
          <h2 className="book-help">
        Precisa de <a href="/duvidas">AJUDA?</a>
      </h2> 
      </div>
      <Footer />
      </>

  );
}

export default Duvidas;
