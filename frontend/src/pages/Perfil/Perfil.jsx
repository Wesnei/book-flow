import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import "./Perfil.css";

export default function Perfil() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle logout by redirecting to login page
  const handleLogout = () => {
    // You might want to clear any user data (e.g., from localStorage, sessionStorage, or context)
    // localStorage.removeItem("user");
    // sessionStorage.removeItem("user");

    // Redirect to the login page
    navigate("/"); // This will navigate to the root URL (login page)
  };

  return (
    <>
      <MainNavbar />
      <div className="perfil-wrapper">
        <div className="perfil-container">
          <h2>Seu Perfil</h2>
          <label className="foto-upload">
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            <div className="foto-preview">
              {image ? <img src={image} alt="Foto do usuário" /> : <span>+</span>}
            </div>
          </label>
          <p className="perfil-nome">Wesnei Paiva</p>
          <p className="perfil-email">wesnei@gmail.com</p>
          <button className="botao-sair" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Sair
          </button>
        </div> 
      </div>
      <h2 className="book-help">
        Precisa de <a href="/duvidas">AJUDA?</a>
      </h2>
      <Footer />
    </>
  );
}
