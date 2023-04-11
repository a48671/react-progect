import { Suspense } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Navbar } from 'wigets/navbar';
import { Sidebar } from 'wigets/sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme-provider';

export function App(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="It is translating...">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="page-content">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
