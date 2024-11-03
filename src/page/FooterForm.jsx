// src/components/FooterForm.js
import React from "react";

const FooterForm = () => {
  return (
    <div>
      <h4>Subscribe now to get daily updates</h4>
      <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate>
        <input type="email" name="EMAIL" placeholder="Email Address" className="placeholder hide-on-focus" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your email address"} />
        <div className="form-icon">
          <button type="submit" className="email_icon newsletter-submit button-contactForm">Send</button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
