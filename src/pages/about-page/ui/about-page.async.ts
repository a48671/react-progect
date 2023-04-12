import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((res) => {
  setTimeout(() => {
    res(undefined);
  }, 1000);
}).then(() => import('./about-page')));
