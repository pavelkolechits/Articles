import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlePreview.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'
import ViewsIcon from 'shared/assets/icons/eyeIcon.svg'
import DateIcon from 'shared/assets/icons/dateIcon.svg'
import { useSelector } from 'react-redux'
import { getCreateArticleData } from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { ArticleBlock } from 'entities/Article'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { fetchArticleDraft } from 'features/CreateArticleCard/model/services/fetchArticleDraft/fetchArticleDraft'
import { getArticleDraft } from 'features/CreateArticleCard/model/selectors/articleDraftSelectors'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { articleDraftReducer } from 'features/CreateArticleCard/model/slices/articleDraftSlice'


interface ArticlePreviewProps {
    className?: string
}

const dynamicReducersProps: UseDynamicReducersProps = {
    reducers: { articleDraft: articleDraftReducer },
    removeAfterAnmount: false
}

export const ArticlePreview = (props: ArticlePreviewProps) => {

    const { className } = props
    const { t } = useTranslation()
    const data = useSelector(getArticleDraft)
    const date = new Date().toLocaleDateString()
    const dispatch = useAppDispatch()
    useDynamicReducers(dynamicReducersProps)

    useEffect(() => {
        dispatch(fetchArticleDraft())
    }, [dispatch])

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

    return (
        <div className={classNames(cls.ArticlePreview, {}, [className])}>
            <Avatar size={200} src={data?.image} className={cls.avatar} />
            <Text
                className={cls.title}
                title={data?.title}
                text={data?.subtitle}
                size='size_l'
            />
            <div className={cls.info}>
                <Icon className={cls.icon} Svg={ViewsIcon} />
                <Text text='0' />
            </div>
            <div className={cls.info}>
                <Icon className={cls.icon} Svg={DateIcon} />
                <Text text={date} />
            </div>
            {data?.blocks.map(renderBlock)}
        </div>
    )
}