import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { ProfileCard } from 'entities/Profile'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { profileActions } from '../../model/slices/profileSlice'
import { useSelector } from 'react-redux'
import { getProfileFormData, getProfileIsLoading, getProfileReadonly } from '../../model/selectors/profileSelectors'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Loader } from 'shared/ui/Loader/loader/Loader'
import { PageLoader } from 'shared/ui/Loader/PageLoader/PageLoader'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { updateAvatar } from '../../model/services/updateAvatar/updateAvatar'

interface EditableProfileCardProps {
    className?: string;
    id: string
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {

    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileFormData)
    const readonly = useSelector(getProfileReadonly)
    const isLoading = useSelector(getProfileIsLoading)

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: value || '' }))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])
    const onChangeAvatar = useCallback((file: FormData) => {
        dispatch(updateAvatar({ id, file }))
    }, [dispatch, id])

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileCardHeader id={id} />
            {isLoading ?
                <Loader /> :
                <ProfileCard
                    readonly={readonly}
                    profileData={formData}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeCountry={onChangeCountry}
                    onChangeCurency={onChangeCurrency}
                    onChangeAvatar={onChangeAvatar}
                />}
        </div>
    )
}