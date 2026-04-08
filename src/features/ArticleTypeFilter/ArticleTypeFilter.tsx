import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTypeFilter.module.scss'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from 'entities/Article'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'

interface ArticleTypeFilterProps {
    className?: string
    value: ArticleType;
    onClick?: (tab: TabItem) => void
}


const typeTabs: TabItem[] = [
    {
        content: ArticleType.IT,
        value: ArticleType.IT,
    },
    {
        content: ArticleType.ECONOMIC,
        value: ArticleType.ECONOMIC
    },
    {
        content: ArticleType.SCIENCE,
        value: ArticleType.SCIENCE
    },
    {
        content: ArticleType.ALL,
        value: ArticleType.ALL
    }
]


// export const ArticleTypeFilter = (props: ArticleTypeFilterProps) => {

//     const { className, onClick, value } = props

//     const onClickTab = useCallback((tab: TabItem) => () => {
//         onClick?.(tab)
//     }, [onClick])


//     return <Tabs
//         className={classNames('', {}, [className])}
//         value={value} onClickTab={onClickTab}
//         tabs={typeTabs}
//     />
// }