import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './TextBlock.module.scss'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { Input } from 'shared/ui/Input/Input'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { useSelector } from 'react-redux'
import {
    getTextBlockPharagraph,
    getTextBlockTitle
} from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { Button } from 'shared/ui/Button/Button'


interface TextBlockProps {
    className?: string
}

export const TextBlock = (props: TextBlockProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const title = useSelector(getTextBlockTitle)
    const pharagraph = useSelector(getTextBlockPharagraph)

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setTextTitle(title))
    }, [dispatch])

    const addPharagraph = useCallback(() => {
        dispatch(createArticleActions.addPharagraph(pharagraph))
    }, [dispatch, pharagraph])

    const onChangePharagraph = useCallback((pharagraph: string) => {
        dispatch(createArticleActions.setTextPharagraph(pharagraph))
    }, [dispatch])

    const saveBlock = useCallback(() => {
        dispatch(createArticleActions.saveTextBlock())
    }, [dispatch])

   

    return (
        <div className={classNames(cls.TextBlock, {}, [className])}>
            <Input value={title} onChange={onChangeTitle} textAlign='start' text='title' />
            <TextArea value={pharagraph} onChange={onChangePharagraph} />
            <Button theme='outline' onClick={addPharagraph}>{t('add pharagraph')}</Button>
            <Button theme='outline' onClick={saveBlock}>{t('save')}</Button>
        </div>
    )
}