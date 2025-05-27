import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CreateArticleCard.module.scss'
import { ArticlePreview } from '../ArticlePreview/ArticlePreview'
import { memo, useCallback, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { createArticleActions, createArticleReducer } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { CreateArticleCardHeader } from '../CreateArticleCardHeader/CreaateArticleCardHeader'
import { TextBlock } from '../TextBlock/TextBlock'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { ArticleBlock } from 'entities/Article'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import { useSelector } from 'react-redux'
import { getCreateArticleData } from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { ImageBlock } from '../ImageBlock/ImageBlock'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { articleDraftReducer } from 'features/CreateArticleCard/model/slices/articleDraftSlice'
import { fetchArticleDraft } from 'features/CreateArticleCard/model/services/fetchArticleDraft/fetchArticleDraft'
import { publishArticle } from 'features/CreateArticleCard/model/services/publishArticle/publishArticle'

interface CreateArticleCardProps {
    className?: string
}

const dynamicReducers: UseDynamicReducersProps = {
    reducers: { createArticle: createArticleReducer, articleDraft: articleDraftReducer },
    removeAfterAnmount: false
}

type BlockType = 'img' | 'code' | 'text' | null

export const CreateArticleCard = memo((props: CreateArticleCardProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const draftData = useSelector(getCreateArticleData)

    useEffect(() => {
        dispatch(fetchArticleDraft())
    }, [dispatch])

    useDynamicReducers(dynamicReducers)

    const addTextBlock = () => {
        dispatch(createArticleActions.addTextBlock())
    }

    const addImgBlock = () => {
        dispatch(createArticleActions.addImgBlock())
    }

    const addCodeBlock = () => {
        dispatch(createArticleActions.addCodeBlock())
    }

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {

        case ArticleBlockType.TEXT:
            return (
                <TextBlock
                    key={block.id}
                    className={cls.block}
                    text={block.text}
                    title={block.title}
                    id={block.id}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ImageBlock
                    key={block.id}
                    className={cls.block}
                    title={block.title}
                    id={block.id}

                />
            );
        case ArticleBlockType.CODE:
            return (
                <CodeBlock
                    key={block.id}
                    className={cls.block}
                    id={block.id}
                    code={block.code}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, [])

    const onPublishArticle = useCallback(() => {
        dispatch(publishArticle())
    }, [dispatch])

    return (
        <div className={classNames(cls.CreateArticleCard, {}, [className])}>
            <CreateArticleCardHeader
                id={draftData?.id}
                image={draftData?.image}
                title={draftData?.title}
                subtitle={draftData?.subtitle}
            />
            <div className={cls.wrapBtn}>
                <Button onClick={addTextBlock} theme='outline'>{t('add text')}</Button>
                <Button onClick={addImgBlock} theme='outline'>{t('add image')}</Button>
                <Button onClick={addCodeBlock} theme='outline'>{t('add code')}</Button>
            </div>
            {draftData?.blocks.map(renderBlock)}
            <Button theme='outline' onClick={onPublishArticle}>{t('publish')}</Button>
        </div>
    )
})