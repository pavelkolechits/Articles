import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {

    const { className } = props
    const { t } = useTranslation()



    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {t('nav')}
            </div>
        </div>
    )
}


