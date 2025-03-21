import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Livros.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";

const Livros = () => {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get("/book");
        
        const updatedLivros = response.data.data.map(livro => ({
          ...livro,
          url: livro.url || "https://wallpapers.com/images/featured/plano-de-fundo-do-livro-xfix8ihv6dmfjzyu.jpg" 
        }));
        
        setLivros(updatedLivros);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/book/${id}`);
      setLivros(livros.filter((livro) => livro.id !== id));
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  return (
    <div className="livros-container">
      <MainNavbar />
      <header className="header">
        <div className="header-left">
          <h1 className="titulo-inclinado">ADMINISTRAR LIVROS</h1>
        </div>
        <div className="header-right">
          <Link to="/add" className="btn btn-primary">
            CADASTRAR
          </Link>
        </div>
      </header>
      <div className="main-content container mt-5">
        <div className="row">
          {livros.map((livro) => (
            <div className="col-md-4 mb-4" key={livro.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  {livro.url && (
                    <img
                      src={livro.url}  
                      alt={livro.title}
                      className="card-img-top"
                      style={{ objectFit: "cover", height: "200px" }}  
                    />
                  )}
                  <h5 className="card-title">{livro.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{livro.author}</h6>
                  <p className="card-text">Preço: R$ {livro.price}</p>
                  <p className="card-text">Quantidade: {livro.quantity}</p>
                  <p className="card-text">Gênero: {livro.genre}</p>
                  <p className="card-text">Ano: {livro.published_year}</p>
                  <div className="livro-actions">
                  <Link to={`/edit/${livro.id}`} className="btn btn-edit">
                    Editar
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(livro.id)}
                  >
                    Excluir
                  </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Livros;
