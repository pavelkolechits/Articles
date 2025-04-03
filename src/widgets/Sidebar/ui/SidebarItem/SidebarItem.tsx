import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import { classNames } from 'shared/helpers/classNames/classNames';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {

    const { item, collapsed } = props
    const { t } = useTranslation()

    return (
        <AppLink
            theme='inverted'
            className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
            to={item.path}>
            <item.Icon className={cls.icon} />
            <div className={cls.text}>
                {t(item.text)}
            </div>
        </AppLink>
    )
})