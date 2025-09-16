import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleListFilters.module.scss'
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { ArticleView } from 'entities/Article/model/types/article'
import { articleListPageAction } from 'pages/ArticleListPage/model/slices/articleListPageSlice'
import { useCallback } from 'react'
import { getArticleListOrder, getArticleListSearch, getArticleListSort, getArticleListView } from 'pages/ArticleListPage/model/selectors/articleListPageSelectors'
import { useSelector } from 'react-redux'
import { Select } from 'shared/ui/Select/Select'
import { Input } from 'shared/ui/Input/Input'
import { Card } from 'shared/ui/Card/Card'
import { ArticleSortSelector } from 'features/ArticleSortSelector/ArticleSortSelector'
import { SortField, SortOrder } from 'shared/types/sort'
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList'
import { useDebounce } from 'shared/hoocs/useDebounce/useDebounce'

interface ArticleListFiltersProps {
    className?: string
}



export const ArticleListFilters = (props: ArticleListFiltersProps) => {

    const dispatch = useAppDispatch()

    const { className } = props
    const { t } = useTranslation()

    const view = useSelector(getArticleListView)
    const sort = useSelector(getArticleListSort)
    const order = useSelector(getArticleListOrder)
    const search = useSelector(getArticleListSearch)

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({replace: true}))
    },[dispatch])

    const debouncedFetchData = useDebounce(fetchData, 1000)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articleListPageAction.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((sort: SortField) => {
        dispatch(articleListPageAction.setSort(sort))
        dispatch(articleListPageAction.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articleListPageAction.setOrder(order))
        dispatch(articleListPageAction.setPage(1))
        fetchData()
    }, [dispatch, fetchData])
    
    const onChangeSearch = useCallback((search: string) => {
        dispatch(articleListPageAction.setSearch(search))
        dispatch(articleListPageAction.setPage(1))
        debouncedFetchData()
    }, [debouncedFetchData, dispatch])

    return (
        <div className={classNames(cls.ArticleListFilters, {}, [className])}>
            <div className={cls.sortWrap}>
                <ArticleSortSelector
                    onChangeField={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    sort={sort}
                    order={order} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card theme='outlined'>
                <Input value={search} onChange={onChangeSearch} textAlign='start' text='search' />
            </Card>
        </div>
    )
}