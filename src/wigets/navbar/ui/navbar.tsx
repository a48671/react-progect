import { classNames } from 'shared/lib/class-names';
import { FC } from 'react';
import cls from './navbar.module.scss';
import { AppLink } from 'shared/ui/app-link';
import { AppLinkTheme } from 'shared/ui/app-link/app-link';

interface INavbarProps {
  className?: string;
};

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/main'>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
      </div>
    </div>
  );
};
