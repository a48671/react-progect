import { FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { Button, ButtonTheme } from 'shared/ui/button';
import { LangSwitcher } from 'wigets/lang-switcher';
import cls from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [isCompact, setIsCompact] = useState(false);

  const onToggleIsCompact = () => setIsCompact((currentIsCompact) => !currentIsCompact);

  return (
    <div className={classNames(cls.sidebar, { [cls.compact]: isCompact }, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onToggleIsCompact}>Switch</Button>
      <div>
        <LangSwitcher />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
