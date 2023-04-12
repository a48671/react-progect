import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config';
import { Loader } from 'shared/ui/loader';

export function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routeConfig.map(({ path, element }) => (<Route key={path} path={path} element={element} />))}
      </Routes>
    </Suspense>
  );
}
