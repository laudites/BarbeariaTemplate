import React, { useState, useEffect, useRef } from 'react';
import logo from '../img/logo/logo.png';
import "../style/HeaderComponent.css";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Cria uma referência para o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função que fecha o menu se o clique for fora do menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Fecha o menu
    }
  };

  useEffect(() => {
    // Adiciona o event listener para detectar cliques fora
    document.addEventListener('mousedown', handleClickOutside);
    
    // Limpeza do event listener quando o componente for desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header-area header-transparent pt-20 height120">
        <div className="main-header header-sticky height100cent">
          <div className="container-fluid height100cent">
            <div className="row align-items-center height100cent">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2 height100cent dispflex">
                <div className="logo height100cent">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  {/* Main-menu */}
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="blog.html">Menu</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Sobre</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Serviços</a>
                            </li>
                            <li>
                              <a href="elements.html">Preços</a>
                            </li>
                            <li>
                              <a href="elements.html">Agendamento</a>
                            </li>
                            <li>
                              <a href="elements.html">Depoimentos</a>
                            </li>
                            <li>
                              <a href="elements.html">Equipe</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    <a href="from.html" className="btn header-btn">
                      Agendar agora
                    </a>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  <div className="slicknav_menu">
                    <a href="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{ outline: "none" }}>
                      <button onClick={toggleMenu} className="hamburger-btn">
                        <span className="hamburger-icon">&#9776;</span> {/* Ícone sanduíche */}
                      </button>
                    </a>
                    {isMenuOpen && (
                      <div ref={menuRef} className={`jscenter mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="mobile-menu-list">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="about.html">Sobre</a></li>
                          <li><a href="services.html">Serviços</a></li>
                          <li><a href="portfolio.html">Portfolio</a></li>
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="contact.html">Contato</a></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
};

export default HeaderComponent;
