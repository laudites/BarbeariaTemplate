// src/components/FooterTop.js
import React from "react";
import FooterForm from "./FooterForm";

const FooterTop = () => {
  return (
    <div className="footer-top footer-padding">
      <div className="row d-flex justify-content-between">
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
          <div className="single-footer-caption mb-50">
            <div className="footer-logo">
              <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="Logo" /></a>
            </div>
            <div className="footer-tittle">
              <div className="footer-pera">
                <p className="info1">Receive updates and latest news direct from Simply enter.</p>
              </div>
            </div>
            <div className="footer-number">
              <h4><span>+564 </span>7885 3222</h4>
              <p>youremail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
          <div className="single-footer-caption mb-50">
            <h4>Location</h4>
            <ul>
              <li><a href="#">Advanced</a></li>
              <li><a href="#">Management</a></li>
              <li><a href="#">Corporate</a></li>
              <li><a href="#">Customer</a></li>
              <li><a href="#">Information</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
          <div className="single-footer-caption mb-50">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
          <div className="single-footer-caption mb-50">
            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
