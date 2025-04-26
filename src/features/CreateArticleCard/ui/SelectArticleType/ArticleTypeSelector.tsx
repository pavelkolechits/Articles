import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTypeSelector.module.scss'
import { ArticleType } from 'entities/Article'
import { Card } from 'shared/ui/Card/Card'
import { useSelector } from 'react-redux'
import { useState } from 'react'

interface ArticleTypeSelectorProps {
    className?: string
}


const articleTypes: ArticleType[] = [
    ArticleType.IT,
    ArticleType.ECONOMIC,
    ArticleType.SCIENCE,
    ArticleType.ALL,
]

export const ArticleTypeSelector = (props: ArticleTypeSelectorProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [select, setSelect] = useState()

  

    return (
        <div className={classNames(cls.ArticleTypeSelector, {}, [className])}>
        </div>
    )
}