import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './app-link.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
};

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
};

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link className={classNames(cls['app-link'], {}, [className, cls[theme]])} { ...otherProps }>
      {children}
    </Link>
  );
};
