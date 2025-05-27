import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CodeBlock.module.scss'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { useCallback, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { createArticleCode } from 'features/CreateArticleCard/model/services/createArticleCode/createArticleCode'
import { ArticleCodeBlock } from 'entities/Article/model/types/article'
import { deleteArticleBlock } from 'features/CreateArticleCard/model/services/deleteBlock/deleteBlock'

interface CodeBlockProps {
    className?: string
    id: string;
    code: string;
    block: ArticleCodeBlock
}

export const CodeBlock = (props: CodeBlockProps) => {

    const { className, id, code, block } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const [isSave, setIsSave] = useState(false)

    const deleteBlock = useCallback(() => {
        dispatch(createArticleActions.deleteBlock(id))
        dispatch(deleteArticleBlock({blockId: id, endpoint: 'code'}))
    }, [dispatch, id])

    const saveBlock = useCallback(() => {
        setIsSave(true)
        dispatch(createArticleCode(block))
    }, [block, dispatch])

    const onChangeText = useCallback((code: string) => {
        dispatch(createArticleActions.setCode({ id, code }))
    }, [dispatch, id])

    const editBlock = useCallback(() => {
        setIsSave(false)
    }, [])

    return (
        <div className={classNames(cls.CodeBlock, {[cls.readonly]: isSave}, [className])}>
            <h3 className={cls.h3}>{t('CODE')}</h3>
            <TextArea readonly={isSave} value={code} onChange={onChangeText} />
            {isSave ?
                <Button theme='outline' onClick={editBlock}>{t('edit')}</Button>
                :
                <div className={cls.wrapBtn}>
                    <Button className={cls.saveBtn} theme='outline-success' onClick={saveBlock}>{t('save')}</Button>
                    <Button theme='outline-error' onClick={deleteBlock}>{t('delete block')}</Button>
                </div>}
        </div>
    )
}