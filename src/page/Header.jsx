// src/components/Header.jsx
import React from 'react';
import '../css/style.css'; // Criar arquivo de estilo específico para o cabeçalho
import logo from '../img/logo/logo.png';

const Header = () => {
  return (
    <header>
      <div className="header-area header-transparent pt-20" style={{background:"#353434"}}>
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <a href="/"><img src={logo} alt="Logo"/></a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <nav className="main-menu f-right d-none d-lg-block">
                    <ul id="navigation">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/portfolio">Portfolio</a></li>
                      <li>
                        <a href="/blog">Blog</a>
                        <ul className="submenu">
                          <li><a href="/blog">Blog</a></li>
                          <li><a href="/blog-details">Blog Details</a></li>
                          <li><a href="/elements">Element</a></li>
                        </ul>
                      </li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </nav>
                  <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    <a href="/from" className="btn header-btn">Become a member</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
