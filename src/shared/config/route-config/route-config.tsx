import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum RouteEnum {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const rotePaths: Record<RouteEnum, string> = {
  [RouteEnum.ABOUT]: '/about',
  [RouteEnum.MAIN]: '/',
  [RouteEnum.NOT_FOUND]: '*'
};

export const routeConfig: Array<RouteProps> = [
  { path: rotePaths.about, element: <AboutPage /> },
  { path: rotePaths.main, element: <MainPage /> },
  { path: rotePaths.not_found, element: <NotFoundPage /> }
];
