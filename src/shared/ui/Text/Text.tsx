import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';


type TextTheme = 'primary' | 'error'
type TextAlign = 'right' | 'left' | 'center'
type TextSize = 'size_m' | 'size_l'



interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    pre?: boolean
}


export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left',
        size = 'size_m',
        pre
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{pre ? <pre>{text}</pre> : text}</p>}
        </div>
    );
});