import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainAsync } from './pages/main/main.async'
import { AboutAsync } from './pages/about/about.async';
import { useTheme } from './theme/use-theme';
import { classNames } from './helpers/class-names';

export const App = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to='/main'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/main' element={<MainAsync />}/>
          <Route path='/about' element={<AboutAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};
