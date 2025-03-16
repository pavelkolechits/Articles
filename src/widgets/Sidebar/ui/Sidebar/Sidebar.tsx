import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {

    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid='toggle' onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    )
}