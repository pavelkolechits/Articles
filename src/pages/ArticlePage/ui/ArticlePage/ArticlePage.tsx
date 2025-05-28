import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Article } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { articleCommentsReducer, getArticleComments } from '../../model/slices/articleCommentsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { fetchArticleComments } from '../../model/services/fetchArticleComments'


interface ArticlePageProps {
    className?: string
}

const dynamicReducers: UseDynamicReducersProps = {
    reducers: { articleComments: articleCommentsReducer }
}

const ArticlePage = (props: ArticlePageProps) => {

    const { className } = props
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticleComments(Number(id)))
    },[dispatch, id])

    useDynamicReducers(dynamicReducers)

    if (!id) {
        return <Text title='Article not found' />
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Article id={id} />
            <CommentList comments={comments}/>
        </div>
    )
}

export default ArticlePage