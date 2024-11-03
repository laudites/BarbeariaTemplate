// src/components/FooterBottom.js
import React from "react";
import SocialLinks from "./SocialLinks";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-xl-9 col-lg-8">
          <div className="footer-copy-right">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made
              with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
