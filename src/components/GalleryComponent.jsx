import React from 'react';
import galleryImage from "../img/gallery/gallery1.png"; // Ajuste o caminho conforme necessário
import galleryImage2 from "../img/gallery/gallery2.png";
import galleryImage3 from "../img/gallery/gallery3.png";
import galleryImage4 from "../img/gallery/gallery4.png";

 const GalleryComponent = () => {

    return(
<>
<div className="gallery-area section-padding30">
              <div className="container">
                {/* Section Tittle */}
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                    <div className="section-tittle text-center mb-100">
                    <span>nossa galeria de imagens</span>
                    <h2>algumas imagens da nossa barbearia</h2>
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
</>
    )
};

export default GalleryComponent;