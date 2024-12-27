import React, { useState, useEffect } from "react";
import sectionBg from "../img/gallery/section_bg02.png";
import FeedbackForm from "./FeedbackForm";
import { db } from "../assets/Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const CommentsComponent = () => {
  const [comments, setComments] = useState([]); // Inicializa com lista vazia
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Função para buscar comentários do Firestore
  const fetchComments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Comentarios"));
      const fetchedComments = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().Descricao, // Mapeia 'Descricao' para 'text'
        author: doc.data().Nome,   // Mapeia 'Nome' para 'author'
      }));
      setComments(fetchedComments);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar comentários do Firestore:", error);
    }
  };

  useEffect(() => {
    fetchComments(); // Busca os comentários ao carregar o componente
  }, []);

  useEffect(() => {
    let progressInterval;

    if (!isLoading && comments.length > 0) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
            return 0; // Reseta o progresso para 0
          }
          return prev + (100 / (5 * 10)); // Aumenta a barra em relação a 5 segundos
        });
      }, 100); // Atualiza a cada 100ms
    }

    return () => clearInterval(progressInterval);
  }, [isLoading, comments.length]);

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
                  <p>{comments[currentIndex]?.text || "Nenhum comentário disponível"}</p>
                  <span>{comments[currentIndex]?.author || "Anônimo"}</span>
                </div>
                {!isLoading && (
                  <div className="loading-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: "rgba(255, 0, 0, 0.7)",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          )}
          <FeedbackForm />
        </div>
      </div>
    </>
  );
};

export default CommentsComponent;
