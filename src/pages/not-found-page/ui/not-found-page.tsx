import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTranslation } from 'react-i18next';
import cls from './not-found-page.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls['not-found-page'], {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
