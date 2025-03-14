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
          <Link to="/add">Adicionar Livro</Link>
        </li>
        <li>
          <Link to="/">Editar Livros</Link>
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
