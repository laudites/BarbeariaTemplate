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
                <div className="mobile_menu d-block d-lg-none">
                <div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">
                                            <li class="active"><a href="index.html" role="menuitem" tabindex="-1">Home</a></li>
                                            <li><a href="about.html" role="menuitem" tabindex="-1">About</a></li>
                                            <li><a href="services.html" role="menuitem" tabindex="-1">Services</a></li>
                                            <li><a href="portfolio.html" role="menuitem" tabindex="-1">Portfolio</a></li>
                                            <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="blog.html" tabindex="-1">Blog</a>
                                                <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style="display: none;">
                                                    <li><a href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                                    <li><a href="blog_details.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                                                    <li><a href="elements.html" role="menuitem" tabindex="-1">Element</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                        </ul></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
