import { combineReducers } from 'redux';

import { ThemeStateInterface, themeReducer } from '@themes/theme.reducer';
import { UserStateInterface, userReducer } from './../../app/user.reducer';
import { ProjectStateInterface, projectReducer } from './../../app/projects/projects.reducer';
import { SkillsStateInterface, skillReducer } from '@app/skills/skills.reducer';

export interface AppStateInterface {
  theme: ThemeStateInterface;
  user: UserStateInterface;
  projects: ProjectStateInterface;
  skills: SkillsStateInterface;
}

export const RootReducer = combineReducers<AppStateInterface>({
  theme: themeReducer,
  user: userReducer,
  projects: projectReducer,
  skills: skillReducer,
});
