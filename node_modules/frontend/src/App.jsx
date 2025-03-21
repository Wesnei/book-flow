import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddBook from "./pages/AddBooks/AddBook"; 
import EditBook from "./pages/EditBook/EditBook";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/CadastroUserPage/Cadastro";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";
import Page404 from "./pages/404/Page404";
import Perfil from "./pages/Perfil/Perfil";
import ListaInteresses from "./pages/ListarInteresses/ListarInteresses";
import Duvidas from "./pages/Duvidas/Duvidas";
import Livros from "./pages/Livros/Livros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route path="/add" element={<AddBook />} /> 
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/listarinteresses" element={<ListaInteresses />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="*" element={<Page404 />} /> 
      </Routes>
    </Router>
  );
}

export default App;