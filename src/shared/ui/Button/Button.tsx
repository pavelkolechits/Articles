import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ThemeButton = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {

    const {
        className,
        children,
        theme = 'clear',
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}