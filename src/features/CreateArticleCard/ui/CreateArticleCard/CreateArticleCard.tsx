import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CreateArticleCard.module.scss'
import { ArticlePreview } from '../ArticlePreview/ArticlePreview'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { createArticleReducer } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { CreateArticleCardHeader } from '../CreateArticleCardHeader/CreaateArticleCardHeader'
import { TextBlock } from '../TextBlock/TextBlock'

interface CreateArticleCardProps {
    className?: string
}

const dynamicReducers: UseDynamicReducersProps = {
    reducers: { createArticle: createArticleReducer }
}

type BlockType = 'img' | 'code' | 'text' | null

export const CreateArticleCard = (props: CreateArticleCardProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [isShowPreview, setIsShowPreview] = useState(false)

    const [blockType, setBlockType] = useState<BlockType>(null)

    useDynamicReducers(dynamicReducers)

    const onShowPreview = () => {
        setIsShowPreview(prew => !prew)
    }

    const addTextBlock = () => {
        setBlockType('text')
    }
    const addImgBlock = () => {
        setBlockType('img')
    }
    const addCodeBlock = () => {
        setBlockType('code')
    }
    const cancel = () => {
        setBlockType(null)
    }

    return (
        <div className={classNames(cls.CreateArticleCard, {}, [className])}>
            <Button theme='outline' onClick={onShowPreview}>{!isShowPreview ? t('preview') : t('back')}</Button>
            {!isShowPreview ?
                <CreateArticleCardHeader />
                :
                <ArticlePreview />
            }
            {!isShowPreview &&
                <>
                    <div className={cls.wrapBtn}>
                        <Button onClick={addTextBlock} theme='outline'>{t('add text')}</Button>
                        <Button onClick={addImgBlock} theme='outline'>{t('add img')}</Button>
                        <Button onClick={addCodeBlock} theme='outline'>{t('add code')}</Button>
                        <Button onClick={cancel} theme='outline'>{t('cancel')}</Button>
                    </div>
                    {blockType === 'text' && <TextBlock />}
                    {blockType === 'img' && 'IMG'}
                    {blockType === 'code' && 'CODE'}
                </>}
        </div>
    )
}