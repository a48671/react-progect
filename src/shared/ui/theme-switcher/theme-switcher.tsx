import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import LiteThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme, useTheme } from 'app/providers/theme-provider';
import { Button, ButtonTheme } from 'shared/ui/button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.NORMAL ? <LiteThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
