import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useCallback, useState, useTransition } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { sidebarItemList } from 'widgets/Sidebar/model/item'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = useCallback(() => {
        setCollapsed(prev => !prev)
    }, [])
    

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.items}>
                {
                    sidebarItemList.map(
                        (item) =>
                            <SidebarItem key={item.path} collapsed={collapsed} item={item} />)
                }
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
})