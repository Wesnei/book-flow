import React from "react";
import "./BookCard.css"; // Certifique-se de criar ou ajustar esse arquivo CSS
import { FaWhatsapp, FaEnvelope, FaBook, FaUser, FaTag } from "react-icons/fa"; // Importando ícones do react-icons

const BookCard = ({ image, title, price, author, genre, description }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="book-card_icons">
        {/* Ícones de livro, autor e gênero do react-icons */}
        <div className="card-icon">
          <FaBook /> <label>{description}</label>
        </div>
        <div className="card-icon">
          <FaUser /> <label>{author}</label>
        </div>
        <div className="card-icon">
          <FaTag /> <label>{genre}</label>
        </div>
      </div>
      <strong>
        R$ {price} {/* Aqui, o preço é mostrado. Se for necessário mostrar algo como "por mês", ajuste conforme necessário */}
      </strong>
      <div className="buttons">
        <a href="https://wa.me/5511999999999" rel="noreferrer" target="_blank">
          <button className="whatsapp">
            <FaWhatsapp />
            WhatsApp
          </button>
        </a>
        <a
          href="mailto:bookflow@gmail.com?subject=Assunto%20do%20Email&body=Estou%20interessado!"
          rel="noreferrer"
          target="_blank"
        >
          <button className="email">
            <FaEnvelope />
            E-mail
          </button>
        </a>
      </div>
    </div>
  );
};

export default BookCard;
