import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState, useTransition } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppRoutes } from 'app/providers/Router/config/routeConfig'
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.items}>
                <AppLink
                    theme='inverted'
                    className={cls.link}
                    to={AppRoutes.MAIN}>
                    <AboutIcon className={cls.icon} />
                    <div className={cls.text}>
                        {t('main')}
                    </div>
                </AppLink>
                <AppLink
                    theme='inverted'
                    className={cls.link}
                    to={AppRoutes.ABOUT}>
                    <MainIcon className={cls.icon} />
                    <div className={cls.text}>
                        {t('about')}
                    </div>
                </AppLink>
            </div>
            <Button
                theme='inverted-background'
                className={cls.collapseBtn}
                data-testid='toggle'
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    )
}