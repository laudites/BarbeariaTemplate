import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FooterInfo.css'; // Estilos personalizados para o footer, se necessário

const FooterInfo = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Mapa do Site */}
        <div className="footer-section">
          <h4>Mapa do Site</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/galeria">Galeria</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h4>Contato</h4>
          <p>Endereço: Rua Exemplo, 123, Bairro, Cidade</p>
          <p>Telefone: (99) 99999-9999</p>
          <p>Email: contato@exemplo.com</p>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h4>Siga-nos</h4>
          <ul className="footer-social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

   
    </footer>
  );
};

export default FooterInfo;
