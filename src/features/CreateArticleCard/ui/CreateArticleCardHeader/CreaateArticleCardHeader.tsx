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
import { ArticleTypeSelector } from '../SelectArticleType/ArticleTypeSelector'
import { ImageUploader } from 'shared/ui/ImageUploader/ImageUploader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { createArticleHeader } from '../../model/services/createArticleHeader/createArticleHeader'
import { updateArticleHeader } from '../../model/services/updateArticleHeader/updateArticleHeader'
import { getArticleDraft } from 'features/CreateArticleCard/model/selectors/articleDraftSelectors'

interface CreaateArticleCardHeaderProps {
    className?: string;
    id?: string;
    image?: string;
    title?: string;
    subtitle?: string;
}



export const CreateArticleCardHeader = memo((props: CreaateArticleCardHeaderProps) => {

    const { className, id, image, title, subtitle } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()


    const [edit, setEdit] = useState(true)

    const [img, setImg] = useState<FormData | null>(null)

    const onChangeTitle = useCallback((title: string) => {
        dispatch(createArticleActions.setArticleTitle(title))
    }, [dispatch])

    const onChangeSubTitle = useCallback((subtitle: string) => {
        dispatch(createArticleActions.setArticleSubtitle(subtitle))
    }, [dispatch])

    const onSaveHeaderData = useCallback(() => {
        
        if(id) {
            dispatch(updateArticleHeader(img))
        } else {
            dispatch(createArticleHeader(img))
            
        }
        setEdit(true)
    }, [dispatch, id, img])

    const onEditHeaderData = useCallback(() => {
        setEdit(false)
    }, [])
    
    const onChangeImg = useCallback((img: FormData) => {
        setImg(img)
    },[])
    console.log(edit, id)
    return (
        <div className={classNames(cls.CreaateArticleCardHeader, {[cls.readonly]: edit}, [className])}>
            <Avatar src={image} className={cls.avatar} />
            <ImageUploader onLoadFile={onChangeImg} readonly={edit} />
            <Input readonly={edit} value={title} onChange={onChangeTitle} textAlign="start" text='title' />
            <Input readonly={edit} value={subtitle} onChange={onChangeSubTitle} textAlign="start" text='subtitle' />
            <ArticleTypeSelector />
            { !edit  ?
                <Button onClick={onSaveHeaderData} className={cls.saveBtn} theme='outline-success'>{t('save')}</Button>
                :
                <Button onClick={onEditHeaderData} theme='outline'>{t('edit')}</Button>}
        </div>
    )
})