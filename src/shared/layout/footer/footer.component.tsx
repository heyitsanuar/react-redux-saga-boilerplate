import React from 'react';

import './footer.styles.css';

type FooterComponentProps = {};

export const FooterComponent = (props: FooterComponentProps) => {
  return (
    <footer id="footer" className="footer">
      <div className="container flex-center">
        <a href="https://github.com/heyitsanuar" className="footer__icon-social github">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/heyitsanuar" className="footer__icon-social facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anuar-jim%C3%A9nez-5a87ba14a/"
          className="footer__icon-social linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};
