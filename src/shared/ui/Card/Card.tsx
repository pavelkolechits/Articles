import { classNames } from 'shared/helpers/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

type CardTheme =  'outlined' | 'normal' | 'background'
  

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme
}


export const Card = (props: CardProps) => {
    const {
        className, children, theme = 'normal', ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};