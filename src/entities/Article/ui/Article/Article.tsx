import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Article.module.scss'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { articleReducer } from '../../model/slices/articleSlice'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article/model/selectors/articleSelectors'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import DateIcon from 'shared/assets/icons/dateIcon.svg'
import ViewsIcon from 'shared/assets/icons/eyeIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleProps {
    className?: string
    id: string
}

const dynamicReducersProps: UseDynamicReducersProps = {
    reducers: { article: articleReducer },
    removeAfterAnmount: true
}

export const Article = (props: ArticleProps) => {

    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const article = useSelector(getArticleData)
    const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)

    useDynamicReducers(dynamicReducersProps)

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, [])

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        )
    } else if (error) {
        content = (<Text title={error} />)
    } else {
        content = (
            <>
                <Avatar size={200} src={article?.img} />
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size='size_l'
                />
                <div className={cls.info}>
                    <Icon className={cls.icon} Svg={ViewsIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.info}>
                    <Icon className={cls.icon} Svg={DateIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>

        )
    }





    return content


}