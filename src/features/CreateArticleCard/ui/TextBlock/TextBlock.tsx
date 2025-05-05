import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './TextBlock.module.scss'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback, useState } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getCreateArticleData } from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { ArticleTextBlock } from 'entities/Article/model/types/article'



interface TextBlockProps {
    className?: string;
    text?: string;
    title?: string;
    id: string
}

export const TextBlock = memo((props: TextBlockProps) => {

    const { className, title, text, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const [isSave, setIsSave] = useState(false)

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setTextTitle({ id, title }))
    }, [dispatch, id])

    const onChangeText = useCallback((text: string) => {
        dispatch(createArticleActions.setText({ id, text }))
    }, [dispatch, id])

    const saveBlock = useCallback(() => {
        setIsSave(true)
    }, [dispatch])

    const editBlock = useCallback(() => {
        setIsSave(false)
    }, [dispatch])

    const deleteBlock = useCallback(() => {
        dispatch(createArticleActions.deleteBlock(id))
    }, [dispatch, id])



    return (
        <div className={classNames(cls.TextBlock, {[cls.readonly]: isSave}, [className])}>
            <h3 className={cls.h3}>{t('TEXT')}</h3>
            <Input
                readonly={isSave}
                className={cls.input}
                value={title}
                onChange={onChangeTitle}
                textAlign='start'
                text='title' />
            <TextArea readonly={isSave} className={cls.textArea} value={text} onChange={onChangeText} />
            {isSave ?
                <Button theme='outline' onClick={editBlock}>{t('edit')}</Button>
                :
                <div className={cls.wrapBtn}>
                    <Button className={cls.saveBtn} theme='outline-success' onClick={saveBlock}>{t('save')}</Button>
                    <Button theme='outline-error' onClick={deleteBlock}>{t('delete block')}</Button>
                </div>}
        </div>
    )
})