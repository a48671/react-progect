import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config';

export function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routeConfig.map((routerProps) => (<Route key={routerProps.path} {...routerProps} />))}
      </Routes>
    </Suspense>
  );
}
