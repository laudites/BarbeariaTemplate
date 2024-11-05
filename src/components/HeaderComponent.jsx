import React from 'react';
import logo from '../img/logo/logo.png';

const HeaderComponent = () => {

    return(
<>
<div className="header-area header-transparent pt-20">
              <div className="main-header header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-xl-2 col-lg-2 col-md-1">
                      <div className="logo">
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
                      <div className="mobile_menu d-block d-lg-none"></div>
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