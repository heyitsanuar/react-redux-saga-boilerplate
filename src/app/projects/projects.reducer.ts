import { AppStateInterface } from '@rdx/root.reducer';
import { ActionInterface } from '@interfaces/action.interface';

import { handleActions } from 'redux-actions';
import { fetchProjectsAction, changeProjectAction } from './projects.action';

import { projects } from '../../shared/data/project';

export interface ProjectStateInterface {
  items: any;
  isLoadingData: boolean;
  hasError: boolean;
  error?: any;
}

const INITIAL_STATE: ProjectStateInterface = {
  items: projects,
  isLoadingData: false,
  hasError: false,
};

export const projectReducer = handleActions(
  {
    [fetchProjectsAction.REQUEST]: (state: ProjectStateInterface) => ({
      ...state,
      isLoadingData: true,
    }),
    [fetchProjectsAction.FAILURE]: (
      state: ProjectStateInterface,
      { payload }: ActionInterface,
    ) => ({
      ...state,
      isLoadingData: false,
      hasError: true,
      error: payload.error,
    }),
    [fetchProjectsAction.SUCCESS]: (
      state: ProjectStateInterface,
      { payload }: ActionInterface,
    ) => ({
      ...state,
      isLoadingData: false,
      items: payload.items,
    }),
    [changeProjectAction.TRIGGER]: (state: ProjectStateInterface, { payload }: ActionInterface) => {
      const projectsArray = Object.keys(state.items);
      const currentPageIndex: number = projectsArray.indexOf(payload.index);
      let nextPageIndex = '';

      if (payload.direction === 'next') {
        nextPageIndex = projectsArray[currentPageIndex + 1] || payload.index;
      } else if (payload.direction === 'back') {
        nextPageIndex = projectsArray[currentPageIndex - 1] || payload.index;
      }

      return {
        ...state,
        items: {
          ...state.items,
          [payload.index]: {
            ...state.items[payload.index],
            isInitial: false,
          },
          [nextPageIndex]: {
            ...state.items[nextPageIndex],
            isInitial: true,
          },
        },
      };
    },
  },
  INITIAL_STATE,
);

export const getProjects = (state: AppStateInterface): any => {
  return Object.keys(state.projects.items).map(key => (state.projects.items as any)[key]);
};

export const getLastIndex = (state: AppStateInterface): any => {
  return Object.keys(state.projects.items).length - 1;
};
