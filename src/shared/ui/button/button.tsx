import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ButtonTheme;
}

export const Button: FC<IButtonProps> = ({
  className, theme, children, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(cls.button, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
