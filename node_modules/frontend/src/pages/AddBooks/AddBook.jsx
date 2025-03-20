import React, { useState } from "react";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const data = {
      title,
      author,
      price: Number(price),
      quantity: Number(quantity),
      genre,
      description,
      published_year: Number(publishedYear),
    };
  
    try {
      await axios.post("/book", data);
      alert("Livro cadastrado com sucesso!");
      navigate("/livros"); // Redireciona para a página de livros após o cadastro
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
      setError("Erro ao cadastrar livro. Tente novamente.");
    }
  };
  return (
    <div className="add-book-container">
      <MainNavbar />
      <form onSubmit={handleSubmit} className="add-book-form-container">
        <div className="add-book-form">
          <h3>Adicionar Livro</h3>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label>Título*</label>
            <FormInput
              type="text"
              placeholder="Ex: O Senhor dos Anéis"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Autor*</label>
            <FormInput
              type="text"
              placeholder="Ex: J.R.R. Tolkien"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Preço (R$)*</label>
            <FormInput
              type="number"
              placeholder="Preço do livro"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label>Quantidade*</label>
            <FormInput
              type="number"
              placeholder="Quantidade disponível"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label>Gênero</label>
            <FormInput
              type="text"
              placeholder="Ex: Fantasia"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Descrição*</label>
            <textarea
              className="form-input"
              placeholder="Descrição breve do livro"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Ano de Publicação</label>
            <FormInput
              type="number"
              placeholder="Ano de publicação"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
            />
          </div>

          <div className="form-submit-btn">
            <Button type="submit">Cadastrar</Button>
          </div>
        </div>
      </form>
      <h2 className="book-help">
        Precisa de <a href="/duvidas">AJUDA?</a>
      </h2>
      <Footer />
    </div>
  );
};

export default AddBook;