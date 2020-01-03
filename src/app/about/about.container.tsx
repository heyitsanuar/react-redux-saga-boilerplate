import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';

import { connect } from 'react-redux';

import { AboutComponent } from './about.component';

export interface AboutContainerProps {
  description: string;
}

const About = ({ description }: AboutContainerProps) => {
  return <AboutComponent description={description} />;
};

const mapStateToProps = (state: AppStateInterface) => ({
  description: state.user.session.description,
});

export const AboutContainer = connect(mapStateToProps)(About);
