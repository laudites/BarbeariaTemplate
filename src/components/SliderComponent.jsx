import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../style/SliderComponent.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,  // tempo de transição de um slide para o outro (em milissegundos)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Ativa o autoplay
    autoplaySpeed: 5000,    // Tempo em milissegundos entre cada transição (exemplo: 3000ms = 3 segundos)
  };
  

  return (
    <div className="slider-area position-relative fix">
      <Slider {...settings} className="slider-active tela100vh">
        <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                <div className="hero__caption">
                  <span data-animation="fadeInUp" data-delay="0.2s">
                    COM A NEWERA digital
                  </span>
                  <h1 data-animation="fadeInUp" data-delay="0.5s">
                    Nossos cortes transformam seu estilo
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider slider-height d-flex align-items-center" style={{ height: '100vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                <div className="hero__caption">
                  <span data-animation="fadeInUp" data-delay="0.2s">
                    COM A NEWERA digital
                  </span>
                  <h1 data-animation="fadeInUp" data-delay="0.5s">
                    Nossos cortes transformam seu estilo
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Texto sobreposto */}
      <div className="stock-text">
        <h2>Fique mais elegante</h2>
        <h2>Fique mais elegante</h2>
      </div>

      {/* Botão com seta */}
      <a href="https://marcaja2.myneweradigital.com/agenda/clientes" style={{ textDecoration: "none" }}>
  <div
    className="thumb-content-box"
    style={{ cursor: "pointer",alignItems: "center" }} // Indica que é clicável
  >
    <div className="thumb-content tcPer">
      <h3>faça um agendamento</h3>
      <i className="fas fa-long-arrow-alt-right fa-2x" style={{ color: "black" }}></i>
    </div>
  </div>
</a>

    </div>
  );
};

export default SliderComponent;
