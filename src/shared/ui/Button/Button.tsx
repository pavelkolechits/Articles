import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ThemeButton = 'clear' | 'outline' | 'background' | 'inverted-background'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    theme?: ThemeButton,
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {

    const {
        disabled,
        className,
        children,
        theme = 'clear',
        ...otherProps
    } = props

    return (
        <button
            disabled={disabled}
            {...otherProps}
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}