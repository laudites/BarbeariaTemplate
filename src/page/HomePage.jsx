// src/page/HomePage.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faDumbbell, faClock } from "@fortawesome/free-solid-svg-icons";

import "../style/HomePage.css";
import "../css/bootstrap.min.css";
import "../css/owl.carousel.min.css";
import "../css/slicknav.css";
import "../css/flaticon.css";
import "../css/gijgo.css";
import "../css/animate.min.css";
import "../css/animated-headline.css";
import "../css/magnific-popup.css";
import "../css/fontawesome-all.min.css";
import "../css/themify-icons.css";
import "../css/slick.css";
import "../css/nice-select.css";
import "../css/style.css";

import logo from "../img/logo/logo.png";
import about from "../img/gallery/about.png";
import signature from "../img/gallery/signature.png";
import aboutShape from "../img/gallery/about-shape.png";
import team1 from "../img/gallery/team1.png";
import team2 from "../img/gallery/team2.png";
import team3 from "../img/gallery/team3.png";
import pricing1 from "../img/gallery/pricing1.png";
import pricing2 from "../img/gallery/pricing2.png";
import homeBlog1 from "../img/gallery/home-blog1.png";
import homeBlog2 from "../img/gallery/home-blog2.png";
import galleryImage from "../img/gallery/gallery1.png"; // Ajuste o caminho conforme necessário
import galleryImage2 from "../img/gallery/gallery2.png";
import galleryImage3 from "../img/gallery/gallery3.png";
import galleryImage4 from "../img/gallery/gallery4.png";
import sectionBg from "../img/gallery/section_bg02.png";

const comments = [
  {
    text: "Vestibulum varius, velit sit amet tempor efficitur, ligula mi lacinia libero, vehicula dui nisi eget purus. Integer cursus nibh non risus maximus dictum.",
    author: "JONT NICOLIN KOOK",
  },
  {
    text: "Outro comentário interessante que mostra a beleza do lugar e a experiência que temos.",
    author: "MARIA SILVA",
  },
  {
    text: "Mais um comentário para dar vida ao nosso slideshow e envolver os visitantes.",
    author: "PEDRO ALVES",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalSlides = comments.length;

  useEffect(() => {
    // Simula o carregamento da página
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos para simular o carregamento

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    let progressInterval;

    if (!isLoading) {
      // Inicia o progresso da barra após o carregamento
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            return 0; // Reseta o progresso para 0
          }
          return prev + (100 / (5 * 10)); // Aumenta a barra em relação a 5 segundos
        });
      }, 100); // Atualiza a cada 100ms
    }

    return () => clearInterval(progressInterval);
  }, [isLoading]);



  return (
    <div className="homepage">
      {isLoading && (
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <header>
            {/* Header Start */}
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
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />

            {/* Header End */}
          </header>

          <main>
            {/* Slider Area Start */}
            <div className="slider-area position-relative fix">
              <div className="slider-active">
                {/* Single Slider */}
                <div className="single-slider slider-height d-flex align-items-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                        <div className="hero__caption">
                          <span data-animation="fadeInUp" data-delay="0.2s">
                            with patrick potter
                          </span>
                          <h1 data-animation="fadeInUp" data-delay="0.5s">
                            Our Hair Style make your look elegance
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* stroke Text */}
              <div className="stock-text">
                <h2>Get More confident</h2>
                <h2>Get More confident</h2>
              </div>
              {/* Arrow */}
              <div className="thumb-content-box">
                <div className="thumb-content">
                  <h3>make an appointment now</h3>
                  <a href="#">
                    {" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Slider Area End */}
            {/* About Area Start */}
            <section className="about-area section-padding30 position-relative">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-11">
                    {/* about-img */}
                    <div className="about-img ">
                      <img src={about} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="about-caption">
                      {/* Section Tittle */}
                      <div className="section-tittle section-tittle3 mb-35">
                        <span>About Our company</span>
                        <h2>52 Years Of Experience In Hair cut!</h2>
                      </div>
                      <p className="mb-30 pera-bottom">
                        Brook presents your services with flexible, convenient
                        and cdpoe layouts. You can select your favorite layouts
                        & elements for cular ts with unlimited ustomization
                        possibilities. Pixel-perfreplication of the designers is
                        intended.
                      </p>
                      <p className="pera-top mb-50">
                        Brook presents your services with flexible, convefnient
                        and ent anipurpose layouts. You can select your
                        favorite.
                      </p>
                      <img src={signature} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* About Shape */}
              <div className="about-shape">
                <img src={aboutShape} alt="" />
              </div>
            </section>
            {/* About-2 Area End */}
            {/* Services Area Start */}
            <section className="service-area pb-170">
              <div className="container">
                {/* Section Tittle */}
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                    <div className="section-tittle text-center mb-90">
                      <span>Professional Services</span>
                      <h2>Our Best services that we offering to you</h2>
                    </div>
                  </div>
                </div>
                {/* Section caption */}
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-caption text-center mb-30">
                      <div className="serviceGeral">
                        <div className="service-icon">
                          <FontAwesomeIcon
                            icon={faCut}
                            size="2x"
                            color="white"
                          />
                        </div>
                        <div className="service-cap">
                          <h4>
                            <a href="#">Stylish Hair Cut</a>
                          </h4>
                          <p>
                            Sorem spsum dolor sit amsectetur adipisclit, seddo
                            eiusmod tempor incididunt ut laborea.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-caption active text-center mb-30">
                      <div className="serviceGeral">
                        <div className="service-icon">
                          <FontAwesomeIcon
                            icon={faDumbbell}
                            size="2x"
                            color="white"
                          />
                        </div>
                        <div className="service-cap">
                          <h4>
                            <a href="#">Body Massage</a>
                          </h4>
                          <p>
                            Sorem spsum dolor sit amsectetur adipisclit, seddo
                            eiusmod tempor incididunt ut laborea.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="services-caption text-center mb-30">
                      <div className="serviceGeral">
                        <div className="service-icon">
                          <FontAwesomeIcon
                            icon={faClock}
                            size="2x"
                            color="white"
                          />
                        </div>
                        <div className="service-cap">
                          <h4>
                            <a href="#">Beard Style</a>
                          </h4>
                          <p>
                            Sorem spsum dolor sit amsectetur adipisclit, seddo
                            eiusmod tempor incididunt ut laborea.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Services Area End */}
            {/* Team Start */}
            <div className="team-area pb-180">
              <div className="container">
                {/* Section Tittle */}
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-11 col-sm-11">
                    <div className="section-tittle text-center mb-100">
                      <span>Professional Teams</span>
                      <h2>Our award winner hair cut exparts for you</h2>
                    </div>
                  </div>
                </div>
                <div className="row team-active dot-style">
                  {/* single Tem */}
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-80 text-center">
                      <div className="team-img">
                        <img src={team1} alt="" />
                      </div>
                      <div className="team-caption">
                        <span>Master Barber</span>
                        <h3>
                          <a href="#">Guy C. Pulido bks</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-80 text-center">
                      <div className="team-img">
                        <img src={team2} alt="" />
                      </div>
                      <div className="team-caption">
                        <span>Color Expart</span>
                        <h3>
                          <a href="#">Steve L. Nolan</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-80 text-center">
                      <div className="team-img">
                        <img src={team3} alt="" />
                      </div>
                      <div className="team-caption">
                        <span>Master Barber</span>
                        <h3>
                          <a href="#">Edgar P. Mathis</a>
                        </h3>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Team End */}
            {/* Best Pricing Area Start */}
            <div className="best-pricing section-padding2 position-relative">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-xl-7 col-lg-7">
                    <div className="section-tittle mb-50">
                      <span>Our Best Pricing</span>
                      <h2>
                        We provide best price
                        <br /> in the city!
                      </h2>
                    </div>
                    {/* Pricing  */}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="pricing-list">
                          <ul>
                            <li>
                              Styling. . . . . . . . . . . . . . . . . . . . . .
                              . . . . . . <span>$25</span>
                            </li>
                            <li>
                              Styling + Color. . . . . . . . . . . . . . . . . .
                              . <span>$65</span>
                            </li>
                            <li>
                              Styling + Tint. . . . . . . . . . . . . . . . . .
                              . . . .<span>$65</span>
                            </li>
                            <li>
                              {" "}
                              Semi-permanent wave. . . . . . . . . . . . .
                              <span>$65</span>
                            </li>
                            <li>
                              {" "}
                              Cut + Styling. . . . . . . . . . . . . . . . . . .
                              . . .<span>$63</span>
                            </li>
                            <li>
                              {" "}
                              Cut + Styling + Color. . . . . . . . . . . . .{" "}
                              <span>$100</span>
                            </li>
                            <li>
                              {" "}
                              Cut + Styling + Tint. . . . . . . . . . . . . . .
                              .<span>$100</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="pricing-list">
                          <ul>
                            <li>
                              Cut. . . . . . . . . . . . . . . . . . . . . . . .
                              . . . . .<span>$25</span>
                            </li>
                            <li>
                              Shave. . . . . . . . . . . . . . . . . . . . . . .
                              . . . <span>$65</span>
                            </li>
                            <li>
                              Beard trim. . . . . . . . . . . . . . . . .{" "}
                              <span>$65</span>
                            </li>
                            <li>
                              Cut + beard trim. . . . . . . . . . . . . . . . .{" "}
                              <span>$65</span>
                            </li>
                            <li>
                              Cut + shave. . . . . . . . . . . . . . . . . . . .
                              . . .<span>$63</span>
                            </li>
                            <li>
                              Clean up. . . . . . . . . . . . . . . . . . . . .
                              . . .<span>$100</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing img */}
              <div className="pricing-img">
                <img className="pricing-img1" src={pricing1} alt="" />
                <img className="pricing-img2" src={pricing2} alt="" />
              </div>
            </div>
            {/* Best Pricing Area End */}

            {/* Gallery Area Start */}
            <div className="gallery-area section-padding30">
              <div className="container">
                {/* Section Tittle */}
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                    <div className="section-tittle text-center mb-100">
                      <span>our image gellary</span>
                      <h2>some images from our barber shop</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img"
                        style={{
                          backgroundImage: `url(${galleryImage})`, // Usando a variável de importação
                          width: "100%", // Ajuste conforme necessário
                          height: "300px", // Ajuste conforme necessário
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="overlay"></div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img"
                        style={{
                          backgroundImage: `url(${galleryImage2})`,
                          width: "100%",
                          height: "300px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="overlay"></div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img"
                        style={{
                          backgroundImage: `url(${galleryImage3})`,
                          width: "100%",
                          height: "300px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="overlay"></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div
                        className="gallery-img"
                        style={{
                          backgroundImage: `url(${galleryImage4})`,
                          width: "100%",
                          height: "300px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <div className="overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Area End */}

            {/* Cut Details Start */}
            <div
              className="cut-details section-bg section-padding2"
              style={{
                backgroundImage: `url(${sectionBg})`,
              }}
            >
              <div className="container">
                {isLoading ? (
                  <div className="loading-bar">
                    <div className="progress"></div>
                  </div>
                ) : (
                  <div className="cut-active dot-style">
                    <div className="single-cut">
                      <div className="cut-icon mb-20">
                        {/* SVG ou qualquer ícone que você queira */}
                      </div>
                      <div className="cut-descriptions">
                        <p>{comments[currentIndex].text}</p>
                        <span>{comments[currentIndex].author}</span>
                      </div>
                      {!isLoading && (
                        <div className="loading-bar">
                          <div className="progress" style={{ width: `${progress}%`, backgroundColor: 'rgba(255, 0, 0, 0.7)' }}></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
            {/* Cut Details End */}

            {/* Blog Area Start */}
            <section className="home-blog-area section-padding30">
              <div className="container">
                {/* Section Tittle */}
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                    <div className="section-tittle text-center mb-90">
                      <span>our recent news</span>
                      <h2>Hipos and tricks from recent blog</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                      <div className="blog-img-cap">
                        <div className="blog-img">
                          <img src={homeBlog1} alt="" />
                          {/* Blog date */}
                          <div className="blog-date text-center">
                            <span>24</span>
                            <p>Now</p>
                          </div>
                        </div>
                        <div className="blog-cap">
                          <p>| Physics</p>
                          <h3>
                            <a href="blog_details.html">
                              Footprints in Time is perfect House in Kurashiki
                            </a>
                          </h3>
                          <a href="blog_details.html" className="more-btn">
                            became a member »
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                      <div className="blog-img-cap">
                        <div className="blog-img">
                          <img src={homeBlog2} alt="" />
                          {/* Blog date */}
                          <div className="blog-date text-center">
                            <span>24</span>
                            <p>Now</p>
                          </div>
                        </div>
                        <div className="blog-cap">
                          <p>| Physics</p>
                          <h3>
                            <a href="blog_details.html">
                              Footprints in Time is perfect House in Kurashiki
                            </a>
                          </h3>
                          <a href="blog_details.html" className="more-btn">
                            became a member »
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Blog Area End */}
            {/* Scroll Up */}
            <div id="back-top">
              <a title="Go to Top" href="#">
                <i className="fas fa-level-up-alt"></i>
              </a>
            </div>

            {/* JS Scripts */}
            <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
            {/* jQuery, Popper, Bootstrap */}
            <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
            <script src="./assets/js/popper.min.js"></script>
            <script src="./assets/js/bootstrap.min.js"></script>
            {/* jQuery Mobile Menu */}
            <script src="./assets/js/jquery.slicknav.min.js"></script>

            {/* Carousel and Slick Plugins */}
            <script src="./assets/js/owl.carousel.min.js"></script>
            <script src="./assets/js/slick.min.js"></script>
            {/* One Page Navigation, Animated Headlines */}
            <script src="./assets/js/wow.min.js"></script>
            <script src="./assets/js/animated.headline.js"></script>
            <script src="./assets/js/jquery.magnific-popup.js"></script>

            {/* Date Picker */}
            <script src="./assets/js/gijgo.min.js"></script>
            {/* Nice Select, Sticky Elements */}
            <script src="./assets/js/jquery.nice-select.min.js"></script>
            <script src="./assets/js/jquery.sticky.js"></script>

            {/* Counter, Waypoint, Hover Direction */}
            <script src="./assets/js/jquery.counterup.min.js"></script>
            <script src="./assets/js/waypoints.min.js"></script>
            <script src="./assets/js/jquery.countdown.min.js"></script>
            <script src="./assets/js/hover-direction-snake.min.js"></script>

            {/* Contact Form Scripts */}
            <script src="./assets/js/contact.js"></script>
            <script src="./assets/js/jquery.form.js"></script>
            <script src="./assets/js/jquery.validate.min.js"></script>
            <script src="./assets/js/mail-script.js"></script>
            <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

            {/* Main jQuery Plugins */}
            <script src="./assets/js/plugins.js"></script>
            <script src="./assets/js/main.js"></script>
          </main>
        </>
      )}
    </div>
  );
};

export default HomePage;
