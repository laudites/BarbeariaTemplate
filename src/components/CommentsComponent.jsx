import React, { useState, useEffect } from "react";
import sectionBg from "../img/gallery/section_bg02.png";

const CommentsComponent  = () => {

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
        <>
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
        </>
    )
};

export default CommentsComponent;