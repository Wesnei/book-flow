import React from "react";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import logo from "../../assets/logo.png";

const MainNavbar = () => {
  return (
    <nav className="main_navbar">
      <Link to="/home">
        <img src={logo} alt="Logo do site" className="main_navbar-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link> {/* Nova opção Home */}
        </li>
        <li>
          <Link to="/livros">Administrar Livros</Link> {/* Alterado para /livros */}
        </li>
        <li>
          <Link to="/duvidas">Dúvidas</Link>
        </li>
        <li>
          <Link to="/listarinteresses">Listar Interesses</Link>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;