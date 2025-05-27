import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ImageBlock.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { ImageUploader } from 'shared/ui/ImageUploader/ImageUploader'
import { Button } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { createArticleImg } from 'features/CreateArticleCard/model/services/createArticleImg/createArticleImg'
import { deleteArticleBlock } from 'features/CreateArticleCard/model/services/deleteBlock/deleteBlock'

interface ImageBlockProps {
    className?: string;
    title?: string;
    id: string
}

export const ImageBlock = (props: ImageBlockProps) => {

    const { className, title, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const [isSave, setIsSave] = useState(false)
    const [img, setImg] = useState<FormData | null>(null)

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setImgTitle({ id, title }))
    }, [dispatch, id])

    const deleteBlock = useCallback(() => {
        dispatch(createArticleActions.deleteBlock(id))
        dispatch(deleteArticleBlock({blockId: id, endpoint: 'img'}))
    }, [dispatch, id])

    const saveBlock = useCallback(() => {
        setIsSave(true)
        dispatch(createArticleImg({formData: img, blockId: id} ))
    }, [dispatch, id, img])
    const editBlock = useCallback(() => {
        setIsSave(false)
    }, [])
    const onChangeImg = useCallback((img: FormData) => {
        setImg(img)
    }, [])



    return (
        <div className={classNames(cls.ImageBlock, { [cls.readonly]: isSave }, [className])}>
            <h3 className={cls.h3}>{t('IMAGE')}</h3>
            <ImageUploader onLoadFile={onChangeImg} readonly={isSave} />
            <Input className={cls.input} onChange={onChangeTitle} value={title} text='title' textAlign='start' />
            {isSave ?
                <Button theme='outline' onClick={editBlock}>{t('edit')}</Button>
                :
                <div className={cls.wrapBtn}>
                    <Button
                        className={cls.saveBtn}
                        theme='outline-success'
                        onClick={saveBlock}
                    >
                        {t('save')}
                    </Button>
                    <Button theme='outline-error' onClick={deleteBlock}>{t('delete block')}</Button>
                </div>}
        </div>
    )
}