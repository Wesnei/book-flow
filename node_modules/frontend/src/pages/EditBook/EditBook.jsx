import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button"; // Importe o componente Button
import "./EditBook.css";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/book/${id}`);
        setBook(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const { title, author, price, quantity, genre, description, published_year } = book;

    try {
      await axios.put(`/book/${id}`, { title, author, price, quantity, genre, description, published_year });
      navigate("/livros"); 
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
    }
  };

  return (
    <div className="edit-book-container">
        <MainNavbar />
      <div className="edit-book-form-container">
        <form onSubmit={handleUpdateBook} className="edit-book-form">
          <h2>Editar Livro</h2>
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={book.title || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Autor</label>
            <input
              type="text"
              name="author"
              value={book.author || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input
              type="number"
              name="price"
              value={book.price || 0}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              name="quantity"
              value={book.quantity || 0}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gênero</label>
            <input
              type="text"
              name="genre"
              value={book.genre || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea
              name="description"
              value={book.description || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Ano de Publicação</label>
            <input
              type="number"
              name="published_year"
              value={book.published_year || 0}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-submit-btn">
            <Button type="submit">Atualizar</Button> {/* Use o componente Button */}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditBook;