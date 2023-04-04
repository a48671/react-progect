import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      {routeConfig.map(routerProps => (<Route key={routerProps.path} { ...routerProps }/>))}
    </Routes>
  );
};
