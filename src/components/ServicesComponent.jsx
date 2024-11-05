import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faDumbbell, faClock } from "@fortawesome/free-solid-svg-icons";

 const ServicesComponent = () => {

    return(
<>
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
</>
    )
};

export default ServicesComponent;