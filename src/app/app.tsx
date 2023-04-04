import { Suspense } from 'react';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from './providers/router';
import { Navbar } from 'wigets/navbar';

export const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
