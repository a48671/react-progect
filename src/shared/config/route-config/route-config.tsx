import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';


enum RouteEnum {
  MAIN = 'main',
  ABOUT = 'about'
};

const rotePaths: Record<RouteEnum, string> = {
  [RouteEnum.ABOUT]: '/about',
  [RouteEnum.MAIN]: '/'
};

export const routeConfig: Array<RouteProps> = [
  { path: rotePaths.about, element: <AboutPage /> },
  { path: rotePaths.main, element: <MainPage /> }
];
