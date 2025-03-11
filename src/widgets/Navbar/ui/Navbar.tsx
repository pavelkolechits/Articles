import { Link } from 'react-router-dom'
import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {

    const { className } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to={'about'}>About</AppLink>
                <AppLink to={'/'}>Main</AppLink>
            </div>
        </div>
    )
}


