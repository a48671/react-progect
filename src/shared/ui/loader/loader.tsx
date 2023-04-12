import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import './loader.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => (
  <div className={classNames('loader', {}, [className])} />
);
