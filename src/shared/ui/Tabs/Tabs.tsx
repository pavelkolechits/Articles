import { memo, ReactNode, useCallback } from "react"
import { classNames } from "shared/helpers/classNames/classNames"
import cls from './Tabs.module.scss'
import { Card } from "../Card/Card"


export interface TabItem {
    value: string,
    content: ReactNode
}


export interface TabsProps {
    tabs: TabItem[],
    className?: string,
    value: string,
    onClickTab: (tab: TabItem) => void
}


export const Tabs = memo((props: TabsProps) => {
    const { tabs, className, value, onClickTab } = props

    const clickHandler = useCallback((tab: TabItem) => () => {
        onClickTab(tab)
    }, [onClickTab])

    return <div className={classNames(cls.Tabs, {}, [className])}>

        {tabs.map((tab) =>
            <Card
                onClick={clickHandler(tab)}
                theme={tab.value  === value ? 'outlined' : 'normal'}
                key={tab.value}
                className={cls.tab}>
                {tab.content}
            </Card>)}

    </div>

})
