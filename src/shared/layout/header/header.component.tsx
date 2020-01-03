import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router';

import injectSheet from 'react-jss';

import './header.styles.css';

interface HeaderComponentProps extends RouteComponentProps {
  classes: { header: string };
}

const styles = (theme: any) => ({
  header: {
    backgroundColor: theme.mainRed,
    color: theme.mainText,
  },
});

const Header = ({ classes }: HeaderComponentProps) => {
  return (
    <div>
      <header id="header" className={`header ${classes.header}`}>
        <nav id="menu" className="header__menu">
          <i
            id="btn-menu-close"
            className="btn__mobile-icon text-white fas fa-times"
            style={{ float: 'right', marginRight: 40 }}
          />
          <a id="link-about" className="header__menu-link" href="#banner-info">
            ABOUT
          </a>
          <a id="link-projects" className="header__menu-link" href="#projects">
            PROJECTS
          </a>
          <a id="logo" className="header__menu-link header__menu-link--logo" href="#banner-info">
            <img
              src="https://i.ibb.co/bFKkM4J/logo.png"
              alt="AJ"
              style={{ width: 40, height: 40 }}
            />
          </a>
          <a id="link-skills" className="header__menu-link" href="#skills">
            SKILLS
          </a>
          <a id="link-contact" className="header__menu-link" href="#facts">
            CONTACT
          </a>
          <div
            className="border border--selftrough w-100"
            style={{ width: '100%', marginTop: '1rem' }}
          />
        </nav>
        <div className="header__mobile container">
          <a href="/">
            <img
              src="https://i.ibb.co/bFKkM4J/logo.png"
              alt="AJ"
              style={{ width: 30, height: 30 }}
            />
            <i id="btn-menu-open" className="btn__mobile-icon fas text-white fa-bars" />
          </a>
        </div>
        <picture>
          <source srcSet="https://i.ibb.co/w6xT6sm/header-hq.jpg" media="(min-width: 992px)" />
          <source srcSet="https://i.ibb.co/47KtCdf/header-mq.jpg" media="(min-width: 768px)" />
          <img
            srcSet="https://i.ibb.co/xFDPkhs/header-lq.jpg"
            className="header__background lazyload"
            alt="Header"
          />
        </picture>
        <div id="banner-info" className="header__banner">
          <div className="container">
            <div className="col-sm-6">
              <h1 className="header__title fw-600 mb-1">ANUAR JIMENEZ</h1>
              <h2 className="header__subtitle fw-600 mb-3">WEB DEVELOPER</h2>
              <p className="header__description">
                Web Developer and student, I'm from Mexico but I feel connected with all the world
                thanks to the internet and its benefits. Love programming, designing, learning
                computer curiosities as a hobby, and at last but not least, I love what I do.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const StyledHeader = injectSheet(styles)(Header);

export const HeaderComponent = withRouter(StyledHeader);
