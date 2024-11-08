import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../style/FooterInfo.css';

const FooterInfo = () => {
  return (
    <footer className="footerInfo">
      <div className="content">
        <div className="upper">
          {/* Logo */}
          <div className="logo">
            <img src="https://www.myneweradigital.com/assets/NeweraLogoBranco3-UO59f0_Z.png" alt="Logo" />
          </div>

          {/* Institucional */}
          <div className="col">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#home">Inicial</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#team">Equipe</a></li>
              <li><a href="#pricing">Tabela de preços</a></li>
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#comments">Depoimentos</a></li>
              <li><a href="#map">Mapa</a></li>
            </ul>
          </div>

          {/* Produtos & Serviços */}
          <div className="col">
            <h3>Serviços</h3>
            <ul>
              <li><Link to="/equipamentos">Equipamentos</Link></li>
              <li><Link to="/assistencia-tecnica">Assistência Técnica</Link></li>
              <li><Link to="/contato">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="col">
            <h3>Redes Sociais</h3>
            <div className="social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
