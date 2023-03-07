import { createContext } from 'react';

export enum Theme {
  DARK = 'dark',
  NORMAL = 'normal'
}

export type TThemeContext = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<TThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
