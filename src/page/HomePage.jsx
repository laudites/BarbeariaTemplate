// src/page/HomePage.jsx
import React, { useState, useEffect } from "react";

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
import sectionBg from "../img/gallery/section_bg02.png";


import HeaderComponent from "../components/HeaderComponent";
import SliderComponent from "../components/SliderComponent";
import AboutComponent from "../components/AboutComponent";
import ServicesComponent from "../components/ServicesComponent";
import TeamComponent from "../components/TeamComponent";
import PricingComponent from "../components/PricingComponent";
import GalleryComponent from "../components/GalleryComponent";
import CommentsComponent from "../components/CommentsComponent";
import BlogComponent from "../components/BlogComponent";




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

 // Adiciona o código para controlar a visibilidade do botão back-top com a rolagem
 useEffect(() => {
  const handleScroll = () => {
    const backTopButton = document.getElementById("back-top");
    if (window.scrollY > 200) {
      backTopButton.style.display = "block"; // Mostra o botão após 200px de rolagem
    } else {
      backTopButton.style.display = "none"; // Esconde quando está acima de 200px
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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
            <HeaderComponent></HeaderComponent>
            {/* Header End */}
          </header>

          <main>
            {/* Slider Area Start */}
           <SliderComponent></SliderComponent>
            {/* Slider Area End */}
            {/* About Area Start */}
            <AboutComponent></AboutComponent>
            {/* About-2 Area End */}
            {/* Services Area Start */}
            <ServicesComponent></ServicesComponent>
            {/* Services Area End */}
            {/* Team Start */}
            <TeamComponent></TeamComponent>
            {/* Team End */}
            {/* Best Pricing Area Start */}
            <PricingComponent></PricingComponent>
            {/* Best Pricing Area End */}

            {/* Gallery Area Start */}
          <GalleryComponent></GalleryComponent>
            {/* Gallery Area End */}

            {/* Cut Details Start */}
            <CommentsComponent></CommentsComponent>
            {/* Cut Details End */}

            {/* Blog Area Start */}
            <BlogComponent></BlogComponent>
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
