import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { ProjectItemProps } from '@app/projects/item.component';

import { connect } from 'react-redux';
import { changeProjectAction } from './projects.action';
import { getProjects, getLastIndex } from './projects.reducer';

import { ProjectOverviewComponent } from './overview.component';

export interface ProjectsContainerProps {
  projects: ProjectItemProps[];
  lastIndex: number;
  changeProjectAction: Function;
}

const Project = ({ projects, lastIndex, changeProjectAction }: ProjectsContainerProps) => {
  return (
    <ProjectOverviewComponent
      projects={projects}
      changeProjectAction={changeProjectAction}
      lastIndex={lastIndex}
    />
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  projects: getProjects(state),
  lastIndex: getLastIndex(state),
});

const mapDispatchToProps = {
  changeProjectAction: changeProjectAction.trigger,
};

export const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
