import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './TextBlock.module.scss'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getCreateArticleData } from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { ArticleTextBlock } from 'entities/Article/model/types/article'



interface TextBlockProps {
    className?: string;
    changeTitle?: (title: string, id: string) => void;
    changeText?: (text: string) => void;
    text?: string;
    title?: string;
    id: string
}

export const TextBlock = memo((props: TextBlockProps) => {

    const { className, changeText, changeTitle, title, text, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setTextTitle({ id, title }))
    }, [dispatch, id])

    const onChangeText = useCallback((text: string) => {
        changeText?.(text)
    }, [changeText])

    const saveBlock = useCallback(() => {
        dispatch(createArticleActions.saveTextBlock())
    }, [dispatch])

    const deleteBlock = useCallback(() => {
        dispatch(createArticleActions.deleteTextBlock(id))
    }, [dispatch, id])

   

    return (
        <div className={classNames(cls.TextBlock, {}, [className])}>
            <Input value={title} onChange={onChangeTitle} textAlign='start' text='title' />
            <TextArea value={text} onChange={onChangeText} />
            <Button theme='outline-success' onClick={saveBlock}>{t('save')}</Button>
            <Button theme='outline-error' onClick={deleteBlock}>{t('delete block')}</Button>
        </div>
    )
})