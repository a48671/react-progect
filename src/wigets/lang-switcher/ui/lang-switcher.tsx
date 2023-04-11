import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Button, ButtonTheme } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';
import cls from './lang-switcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls['lang-switcher'], {}, [className])}
    >
      {t('Перевод')}
    </Button>
  );
};
