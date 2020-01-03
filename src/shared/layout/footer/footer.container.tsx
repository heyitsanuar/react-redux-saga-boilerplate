import React from 'react';

import { connect } from 'react-redux';
import { AppStateInterface } from './../../rdx/root.reducer';

import { FooterComponent } from './footer.component';

type FooterContainerProps = {};

const Footer = (props: FooterContainerProps) => {
  return <FooterComponent />;
};

const mapStateToProps = (state: AppStateInterface) => ({});

const mapDispatchToProps = {};

export const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
