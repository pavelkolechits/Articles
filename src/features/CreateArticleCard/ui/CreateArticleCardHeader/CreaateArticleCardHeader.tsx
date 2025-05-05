import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CreateArticleCardHeader.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback, useState } from 'react'
import { createArticleActions } from 'features/CreateArticleCard/model/slices/createArticleSlice'
import { useSelector } from 'react-redux'
import {
    getCreateArticleData,
    getCreateArticleSubTitle,
    getCreateArticleTitle
} from 'features/CreateArticleCard/model/selectors/createArticleSelectors'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { ArticleType } from 'entities/Article'
import { ArticleTypeSelector } from '../SelectArticleType/ArticleTypeSelector'
import { ImageUploader } from 'shared/ui/ImageUploader/ImageUploader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { createArticleTemplate } from 'features/CreateArticleCard/model/services/createArticleTemplate/createArticleTemplate'

interface CreaateArticleCardHeaderProps {
    className?: string
}



export const CreateArticleCardHeader = memo((props: CreaateArticleCardHeaderProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const title = useSelector(getCreateArticleTitle)
    const subtitle = useSelector(getCreateArticleSubTitle)
    const [isSave, setIsSave] = useState(false)
    const [img, setImg] = useState<FormData | null>(null)
    const articleImage = useSelector(getCreateArticleData)?.image

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setArticleTitle(title))
    }, [dispatch])
    const onChangeSubTitle = useCallback((subtitle: string) => {
        dispatch(createArticleActions.setArticleSubtitle(subtitle))
    }, [dispatch])
    const onSaveHeaderData = useCallback(() => {
        setIsSave(true)
        dispatch(createArticleTemplate(img))
    }, [dispatch, img])
    const onEditHeaderData = useCallback(() => {
        setIsSave(false)
    }, [])
    const onChangeImg = useCallback((img: FormData) => {
        setImg(img)
    },[])

    return (
        <div className={classNames(cls.CreaateArticleCardHeader, {[cls.readonly]: isSave}, [className])}>
            <Avatar src={articleImage} className={cls.avatar} />
            <ImageUploader onLoadFile={onChangeImg} readonly={isSave} />
            <Input readonly={isSave} value={title} onChange={onChangeTitle} textAlign="start" text='title' />
            <Input readonly={isSave} value={subtitle} onChange={onChangeSubTitle} textAlign="start" text='subtitle' />
            <ArticleTypeSelector />
            {!isSave ?
                <Button onClick={onSaveHeaderData} className={cls.saveBtn} theme='outline-success'>{t('save')}</Button>
                :
                <Button onClick={onEditHeaderData} theme='outline'>{t('edit')}</Button>}
        </div>
    )
})