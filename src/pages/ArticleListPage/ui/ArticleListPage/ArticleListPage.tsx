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
import {  getArticleListInited, getArticleListIsLoading, getArticleListView } from '../../model/selectors/articleListPageSelectors'
import { ArticleViewSelector } from '../ArticleViewSelector/ArticleViewSelector'
import { ArticleView } from 'entities/Article/model/types/article'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlePage } from 'pages/ArticleListPage/model/services/fetchNextArticlePage'
import { initArticleListPage } from 'pages/ArticleListPage/model/services/initArticleListPage'


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

    useDynamicReducers(dynamicReducersProps)

    const dispatch = useAppDispatch()

    const article = useSelector(getArticles.selectAll)
    const view = useSelector(getArticleListView)
    const isLoading = useSelector(getArticleListIsLoading)

   

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articleListPageAction.setView(view))
    }, [dispatch])


    useEffect(() => {
        dispatch(initArticleListPage())
    }, [dispatch])


    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])



    return (
        <Page onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList isLoading={isLoading} view={view} articles={article} />
        </Page>
    )
}

export default ArticleListPage