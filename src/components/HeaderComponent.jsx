import React from 'react';
import logo from '../img/logo/logo.png';
import "../style/HeaderComponent.css";

const HeaderComponent = () => {

  return (
    <>
      <div className="header-area header-transparent pt-20 height120">
        <div className="main-header header-sticky height100cent">
          <div className="container-fluid height100cent">
            <div className="row align-items-center height100cent">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2  height100cent dispflex">
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
                      <span className="slicknav_menutxt">MENU</span>
                      <span className="slicknav_icon">
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                        <span className="slicknav_icon-bar"></span>
                      </span>
                    </a>
                    <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ display: "none" }}>
                      <li className="active"><a href="index.html" role="menuitem" tabIndex="-1">Home</a></li>
                      <li><a href="about.html" role="menuitem" tabIndex="-1">About</a></li>
                      <li><a href="services.html" role="menuitem" tabIndex="-1">Services</a></li>
                      <li><a href="portfolio.html" role="menuitem" tabIndex="-1">Portfolio</a></li>
                      <li className="slicknav_collapsed slicknav_parent">
                        <a href="blog.html" role="menuitem" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: "none" }}>Blog</a>
                        <span className="slicknav_arrow">+</span>
                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: "none" }}>
                          <li><a href="blog.html" role="menuitem" tabIndex="-1">Blog</a></li>
                          <li><a href="blog_details.html" role="menuitem" tabIndex="-1">Blog Details</a></li>
                          <li><a href="elements.html" role="menuitem" tabIndex="-1">Element</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html" role="menuitem" tabIndex="-1">Contact</a></li>
                    </ul>
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
  )
};

export default HeaderComponent;