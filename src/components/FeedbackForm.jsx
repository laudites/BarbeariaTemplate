import React, { useState, useEffect } from "react";
import "../style/FeedbackForm.css";
import { db } from "../assets/Firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const FeedbackForm = () => {
    const [userName, setUserName] = useState(""); // Para o nome do usuário
    const [userMessage, setUserMessage] = useState(""); // Para a mensagem de avaliação
    const [feedbackList, setFeedbackList] = useState([]); // Para armazenar as avaliações enviadas
    const [buttonText, setButtonText] = useState("Enviar Avaliação"); // Texto do botão
    const [isBlinking, setIsBlinking] = useState(false); // Estado para controlar a animação

    const handleAddFeedback = async (e) => {
        e.preventDefault();
        if (userName.trim() && userMessage.trim()) {
            try {
                await addDoc(collection(db, "Comentarios"), {
                    Nome: userName,
                    Descricao: userMessage,
                });
                setUserName("");
                setUserMessage("");

                // Atualiza o texto e ativa a animação de piscar
                setButtonText("Mensagem enviada!");
                setIsBlinking(true);

                // Reseta o estado após 3 segundos
                setTimeout(() => {
                    setButtonText("Enviar Avaliação");
                    setIsBlinking(false);
                }, 3000);

                fetchComments(); // Atualiza a lista após salvar
            } catch (error) {
                console.error("Erro ao salvar comentário:", error);
            }
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };


    return (
        <div className="feedback-card">
            <div className="feedback-container single-cut">
                <h3>Deixe sua Avaliação</h3>
                <form onSubmit={handleAddFeedback}>
                    <div className="form-group">
                        <label htmlFor="userName">Seu Nome:</label>
                        <input
                            type="text"
                            id="userName"
                            className="form-control"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userMessage">Sua Avaliação:</label>
                        <textarea
                            id="userMessage"
                            className="form-control"
                            rows="3"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-primary mt-3 ${isBlinking ? "blinking" : ""}`}
                    >
                        {buttonText}
                    </button>
                </form>
            </div>           
        </div>
    );
};

export default FeedbackForm;
