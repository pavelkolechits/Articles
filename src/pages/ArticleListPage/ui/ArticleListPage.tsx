/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { useSelector } from 'react-redux'
import { getArticleData } from 'entities/Article/model/selectors/articleSelectors'
import { articleListPageReducer, getArticles } from '../model/slices/articleListPageSlice'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'
import { fetchArticleList } from '../model/services/fetchArticleList'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'


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
    const article = useSelector(getArticles.selectAll)
    const dispatch = useAppDispatch()

    useDynamicReducers(dynamicReducersProps)
    useEffect(() => {
        dispatch(fetchArticleList())
    }, [dispatch])


    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList view='list' articles={article} />
        </div>
    )
}

export default ArticleListPage