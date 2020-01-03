import React from 'react';

import './facts.styles.css';

export const FactsComponent = () => {
  return (
    <section id="facts" className="facts page-section" data-matching-link="#link-contact">
      <div className="container">
        <div className="facts__info col-xs-12 col-sm-3">
          <h1 className="facts__title">FACTS</h1>
          <ul className="facts__list">
            <li className="facts__text">Studied Software Engineering in Mexico.</li>
            <li className="facts__text">Really love learning new languages.</li>
            <li className="facts__text">Geek but sociable.</li>
          </ul>
        </div>
        <div id="facts-items" className="facts__items col-xs-12 col-sm-9">
          <div id="facts-animation" />
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/FnPr7pY/self-taught.png"
              alt="Self taught"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/B3tSx9t/self-taught-active.png"
              alt="Self taught"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/8zytSmz/creativity.png"
              alt="Creative"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/xF5J2N4/creativity-active.png"
              alt="Creative"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/HDkspd6/teamwork.png"
              alt="Team Work"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/BT46QmD/teamwork-active.png"
              alt="Team Work"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/hX5x00n/work.png"
              alt="Work"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/3mHXhzK/work-active.png"
              alt="Work"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/ncp63h8/conflict.png"
              alt="Conflict"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/r7MLwGz/conflict-active.png"
              alt="Conflict"
            />
          </div>
          <div className="facts__image">
            <img
              className="facts__thumb--inactive lazyload"
              src="https://i.ibb.co/YTFN1Qv/decision.png"
              alt="Decision making"
            />
            <img
              className="facts__thumb--active lazyload"
              src="https://i.ibb.co/TTCm59z/decision-active.png"
              alt="Decision making"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
