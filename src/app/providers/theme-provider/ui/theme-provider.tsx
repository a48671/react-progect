import React, { PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme.context';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
