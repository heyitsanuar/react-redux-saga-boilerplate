import { DarkTheme } from './dark.theme';

export const configRootTheme = (activeTheme: string) => {
  switch (activeTheme) {
    case 'darkTheme':
      return DarkTheme;
    default:
      return DarkTheme;
  }
};
