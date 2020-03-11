import React from 'react';

import { IAppState } from '@rdx/root.reducer';

import { connect } from 'react-redux';
import { getPrograms } from './programs.selectors';

export interface IProgramsProps {
 
}

const Programs = (props: IProgramsProps) => {
  const { } = props;

  return (
        <div>
            Full Redux Container
        </div>
  );
};

const mapStateToProps = (state: IAppState) => ({

});

const mapDispatchToProps = {

};

export const ProgramsContainer = connect(mapStateToProps, mapDispatchToProps)(Programs);
