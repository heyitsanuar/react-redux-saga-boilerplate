import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { SkillType } from './skill.type';

import { connect } from 'react-redux';
import { getSkillsSelector } from './skills.reducer';

import { SkillListComponent } from './list.component';

export interface SkillsContainerProps {
  skills: SkillType[];
}

const Skills = ({ skills }: SkillsContainerProps) => {
  return <SkillListComponent skills={skills} />;
};

const mapStateToProps = (state: AppStateInterface) => ({
  skills: getSkillsSelector(state),
});

export const SkillsContainer = connect(mapStateToProps)(Skills);
