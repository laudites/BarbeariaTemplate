// src/components/Footer.js
import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import ScrollUpButton from "./ScrollUpButton";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area section-bg" style={{ backgroundImage: "url(assets/img/gallery/footer_bg.png)" }}>
        <div className="container">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
      <ScrollUpButton />
    </footer>
  );
};

export default Footer;
