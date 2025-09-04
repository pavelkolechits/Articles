/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { useSelector } from 'react-redux'
import { articleListPageAction, articleListPageReducer, getArticles } from '../../model/slices/articleListPageSlice'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { fetchArticleList } from '../../model/services/fetchArticleList'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { getArticleListHasMore, getArticleListIsLoading, getArticleListPageNumber, getArticleListView } from '../../model/selectors/articleListPageSelectors'
import { ArticleViewSelector } from '../ArticleViewSelector/ArticleViewSelector'
import { ArticleView } from 'entities/Article/model/types/article'
import { Page } from 'shared/ui/Page/Page'


interface ArticleListPageProps {
    className?: string
}

const dynamicReducersProps: UseDynamicReducersProps = {
    reducers: { articleListPage: articleListPageReducer },
    removeAfterAnmount: false
}

const ArticleListPage = (props: ArticleListPageProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const article = useSelector(getArticles.selectAll)
    const view = useSelector(getArticleListView)
    const page = useSelector(getArticleListPageNumber)
    const hasMore = useSelector(getArticleListHasMore)
    const isLoading = useSelector(getArticleListIsLoading)
   

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articleListPageAction.setView(view))
    }, [dispatch])

    useDynamicReducers(dynamicReducersProps)

    useEffect(() => {
        dispatch(articleListPageAction.initState())
        dispatch(fetchArticleList({ page: 1 }))
    }, [dispatch])


    const onLoadNextPage = useCallback(() => {
     
        if (hasMore ) {
            dispatch(articleListPageAction.setPage(page + 1))
            dispatch(fetchArticleList({ page }))
        }
    }, [dispatch, hasMore, page])



    return (
        <Page onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList isLoading={isLoading} view={view} articles={article} />
        </Page>
    )
}

export default ArticleListPage