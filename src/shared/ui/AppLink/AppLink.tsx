import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

type AppLinkTheme = 'primary' | 'inverted'

interface AppLinkProps extends LinkProps {
    className?: string
    children: ReactNode 
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {

    const {
        className,
        to,
        children,
        theme = 'primary',
        ...otherProps
    } = props

    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}