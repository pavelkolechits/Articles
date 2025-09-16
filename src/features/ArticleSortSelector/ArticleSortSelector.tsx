import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { useMemo } from 'react'
import { SortField, SortOrder } from 'shared/types/sort'

interface ArticleSortSelectorProps {
    className?: string;
    sort: SortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeField: (sort: SortField) => void
}




export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {

    const { className, sort, order, onChangeField, onChangeOrder } = props
    const { t } = useTranslation()


    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        { value: 'asc', text: 'asc' },
        { value: 'desc', text: 'desc' }
    ], [])

    const sortFieldOptions = useMemo<SelectOptions<SortField>[]>(() => [
        { value: 'createdAt', text: 'createdAt' },
        { value: 'title', text: 'title' },
        { value: 'views', text: 'views' }
    ], [])



    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeField}
                options={sortFieldOptions}
                textAlign='center'
                label='Sort by' />
            <Select value={order} onChange={onChangeOrder} options={orderOptions} textAlign='center' label='By' />
        </div>
    )
}