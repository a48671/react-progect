import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme.context';

type TUseThemeResult = {
  toggleTheme: VoidFunction;
  theme: Theme;
}

export function useTheme(): TUseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
