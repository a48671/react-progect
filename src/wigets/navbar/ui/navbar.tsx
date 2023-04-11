import { classNames } from 'shared/lib/class-names';
import { FC } from 'react';
import { AppLink } from 'shared/ui/app-link';
import { AppLinkTheme } from 'shared/ui/app-link/app-link';
import { RouteEnum, rotePaths } from 'shared/config/route-config';
import cls from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={classNames(cls.links)}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={rotePaths[RouteEnum.MAIN]}>Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={rotePaths[RouteEnum.ABOUT]}>About</AppLink>
    </div>
  </div>
);
