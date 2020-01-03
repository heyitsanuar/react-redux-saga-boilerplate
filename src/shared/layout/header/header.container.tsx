import React from 'react';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';

import { HeaderComponent } from './header.component';

type HeaderContainerProps = {};

const Header = (props: HeaderContainerProps) => {
  return <HeaderComponent />;
};

const mapStateToProps = (state: AppStateInterface) => ({});

const mapDispatchToProps = {};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
