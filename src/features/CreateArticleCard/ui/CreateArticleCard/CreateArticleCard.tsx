import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CreateArticleCard.module.scss'
import { ArticlePreview } from '../ArticlePreview/ArticlePreview'
import { memo, useCallback, useState } from 'react'
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

interface CreateArticleCardProps {
    className?: string
}

const dynamicReducers: UseDynamicReducersProps = {
    reducers: { createArticle: createArticleReducer }, removeAfterAnmount: false
}

type BlockType = 'img' | 'code' | 'text' | null

export const CreateArticleCard = memo((props: CreateArticleCardProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const draftData = useSelector(getCreateArticleData)

    useDynamicReducers(dynamicReducers)

    const addTextBlock = () => {
        dispatch(createArticleActions.addTextBlock())
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
                />
            );
        default:
            return null;
        }
    }, [])

    return (
        <div className={classNames(cls.CreateArticleCard, {}, [className])}>
            <CreateArticleCardHeader />
            <div className={cls.wrapBtn}>
                <Button onClick={addTextBlock} theme='outline'>{t('add text')}</Button>
            </div>
            {draftData?.blocks.map(renderBlock)}
        </div>
    )
})