import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCardHeader.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from '../../model/selectors/profileSelectors'
import { profileActions } from '../../model/slices/profileSlice'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
    className?: string;
    id: string;
    imageFormData: FormData | null
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {

    const { className, id , imageFormData} = props
    const { t } = useTranslation('profile')
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(profileActions.setReadonly(false))
    }

    const onCancel = () => {
        dispatch(profileActions.setReadonly(true))
        dispatch(profileActions.cancelEdit())
    }
    const onUpdateData = () => {
        dispatch(updateProfileData(imageFormData))
    }

    return (
        <div className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {
                readonly ?
                    <Button onClick={onEdit} theme='outline'>{t('edit')}</Button>
                    :
                    <div className={cls.wrapBtn}>
                        <Button
                            onClick={onUpdateData}
                            theme='outline-success'>
                            {t('save')}
                        </Button>
                        <Button
                            className={cls.cancelBtn}
                            onClick={onCancel}
                            theme='outline-error'>
                            {t('cancel')}
                        </Button>
                    </div>
            }
        </div>
    )
}