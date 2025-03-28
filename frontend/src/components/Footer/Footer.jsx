import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section logo-section">
        <img src={logo} alt="Cert" className="logo" />
      </div>
      <div className="footer-section contact-section">
        <h4>Contato</h4>
        <p>
          <FaWhatsapp /> (88) 1234 - 5678
        </p>
        <p>
          <FaPhone /> (88) 3427 - 1845
        </p>
        <p>
          <FaEnvelope />{" "}
          <a href="mailto:bookflow@gmail.com"> bookflow@gmail.com</a>
        </p>
      </div>
      <div className="footer-section hours-section">
        <h4>Horários de Atendimentos</h4>
        <p>Segunda a Sexta: 8h às 18h</p>
        <p>Sábado: 8h às 13h</p>
      </div>
    </footer>
  );
};

export default Footer;