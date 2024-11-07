import React from 'react';
import pricing2 from "../img/gallery/pricing2.png";

const PricingComponent = () => {

    return(
<>
<div className="best-pricing section-padding2 position-relative">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-xl-7 col-lg-7">
                    <div className="section-tittle mb-50">
                      
                      <h2>
                      Tabela de Preços
                      </h2>
                      <span>Serviços de qualidade e preços justos.</span>
                    </div>
                    {/* Preços  */}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="pricing-list">
                          <ul>
                            <li>
                            Corte de Cabelo. . . . . . . . . . . . . <span>R$45</span>
                            </li>
                            <li>
                            Barba. . . . . . . . . . . . . <span>R$35</span>
                            </li>
                            <li>
                            Design de Sobrancelhas. . . . . . . . . . . . . <span>R$15</span>
                            </li>
                            <li>
                              Corte de Cabelo + Barba. . . . . . . . . . . . . 
                              <span>R$70</span>
                            </li>
                            <li>
                              Barboterapia. . . . . . . . . . . . . <span>R$55</span>
                            </li>
                            <li>
                              Corte + Sobrancelhas + Coloração. . . . .<span>R$100</span>
                            </li>
                            <li>
                              Corte + Sobrancelhas + Tonalização. . . . .<span>R$100</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="pricing-list">
                          <ul>
                            <li>
                            Selagem a partir de. . . . . . . . . . . . . <span>R$100</span>
                            </li>
                            <li>
                            Reconstrução a partir de. . . . . . . . . . . . . <span>R$100</span>
                            </li>
                            <li>
                            Hidrataçãoa partir de. . . . . . . . . . . . . <span>R$100</span>
                            </li>
                            <li>
                              planos gold. . . . . . . . . . . . . <span>R$65</span>
                            </li>
                            <li>
                              planos prata. . . . . . . . . . . . . <span>R$50</span>
                            </li>
                            <li>
                              Limpeza. . . . . . . . . . . . . <span>R$100</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* imagem de preços */}
              <div className="pricing-img">                
                <img className="pricing-img2" src={pricing2} alt="" />
              </div>
            </div>
</>
    )
};

export default PricingComponent;
