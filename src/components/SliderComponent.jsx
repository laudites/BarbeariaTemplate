import React from 'react';

const SliderComponent = () => {
  return (
    <div className="slider-area position-relative fix">
    <div className="slider-active tela100vh">
      {/* Single Slider */}
      <div className="single-slider slider-height d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
              <div className="hero__caption">
                <span data-animation="fadeInUp" data-delay="0.2s">
                  Com NewEra Digital
                </span>
                <h1 data-animation="fadeInUp" data-delay="0.5s">
                  Nosso estilo deixa você mais elegante
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* stroke Text */}
    <div className="stock-text">
      <h2>Fique mais elegante</h2>
      <h2>Fique mais elegante</h2>
    </div>
    {/* Arrow */}
    <div className="thumb-content-box">
      <div className="thumb-content">
        <h3>faça um agendamento</h3>
        <a href="#">
          {" "}
          <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  </div>
  );
};

export default SliderComponent;