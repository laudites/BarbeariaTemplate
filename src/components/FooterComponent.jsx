import React from "react";
import '../style/FooterComponent.css'; // Certifique-se de adicionar este arquivo CSS para estilizar o rodapé.

const FooterComponent = () => {
  return (
    <>
      <section className="container-fluid footer_section">      
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Todos os Direitos Reservados. Desenvolvido por 
              <a style={{color: "#fec913"}} href="https://neweradigital.com"> NewEra Digital</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterComponent;
