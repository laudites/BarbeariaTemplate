import React from 'react';
import about from "../img/gallery/about.png";
import signature from "../img/gallery/signature.png";
import aboutShape from "../img/gallery/about-shape.png";

const AboutComponent = () => {
  return (
    <>
      <section className="about-area section-padding30 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-11">
              {/* about-img */}
              <div className="about-img">
                <img src={about} alt="Imagem da barbearia" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-caption">
                {/* Section Tittle */}
                <div className="section-tittle section-tittle3 mb-35">
                  <span>Sobre a nossa barbearia</span>
                  <h2>Bem-vindo à NewEra Digital</h2>
                </div>
                <p className="mb-30 pera-bottom">
                  A NewEra Digital abriu suas portas com uma proposta inovadora, inspirada nas clássicas barbearias, mas com um toque moderno. Hoje, somos uma das barbearias mais frequentadas de Goiânia, oferecendo um ambiente confortável e acolhedor para todos os nossos clientes.
                </p>
                <p className="pera-top mb-50">
                  Nossos barbeiros são profissionais qualificados, cuidadosamente selecionados para atender tanto o público adulto quanto infantil, sempre com muita dedicação e cuidado para realçar o melhor visual para cada cliente.
                </p>
                <p className="pera-top mb-50">
                  Na NewEra Digital, você encontra um ambiente familiar, estacionamento na porta, TVs com programação esportiva, música ambiente, preços acessíveis e, o mais importante, um atendimento de qualidade.
                </p>
                <img src={signature} alt="Assinatura" />
              </div>
            </div>
          </div>
        </div>
        {/* About Shape */}
        <div className="about-shape">
          <img src={aboutShape} alt="Forma decorativa" />
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
