import { useState } from "react";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import "./ListarInteresses.css";
import { FaPhone, FaEllipsisV } from "react-icons/fa";

const ListaInteresses = () => {
  const [menuAberto, setMenuAberto] = useState(null);

  const interesses = [
    { usuario: "João Sousa", email: "example@email.com", telefone: "5585987654321", livro: "O Pequeno Príncipe", idLivro: 1 },
    { usuario: "Maria Silva", email: "example@email.com", telefone: "5585987654321", livro: "1984", idLivro: 2 },
    { usuario: "Carlos Oliveira", email: "example@email.com", telefone: "5585987654321", livro: "Dom Quixote", idLivro: 3 },
    { usuario: "Ana Costa", email: "", telefone: "5585987654321", livro: "Cem Anos de Solidão", idLivro: 4 },
    { usuario: "Pedro Alves", email: "", telefone: "5585987654321", livro: "A Revolução dos Bichos", idLivro: 5 },
    { usuario: "Luiza Mendes", email: "", telefone: "5585987654321", livro: "Orgulho e Preconceito", idLivro: 6 },
    { usuario: "Fernanda Lima", email: "", telefone: "5585987654321", livro: "O Hobbit", idLivro: 7 },
    { usuario: "Rafael Souza", email: "", telefone: "5585987654321", livro: "Harry Potter e a Pedra Filosofal", idLivro: 8 },
  ];


  return (
    <>
      <MainNavbar />
      <br />
      <div className="container">
        <h2 className="titulo">Lista de Interesses em Livros</h2>
        <div className="tabela-wrapper">
          <table className="tabela-interesses">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Email</th>
                <th>Livro de Interesse</th>
                <th>ID do Livro</th>
              </tr>
            </thead>
            <tbody>
              {interesses.map((item, index) => (
                <tr key={index}>
                  <td>{item.usuario}</td>
                  <td className={item.email ? "email-disponivel" : "email-indisponivel"}>
                    {item.email ? <a href={`mailto:${item.email}`}>{item.email}</a> : "Não disponível"}
                  </td>
                  <td>{item.livro}</td>
                  <td>{item.idLivro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="book-help">
        Precisa de <a href="/duvidas">AJUDA?</a>
      </h2>    
        </div>
      <Footer />
    </>
  );
};

export default ListaInteresses;
