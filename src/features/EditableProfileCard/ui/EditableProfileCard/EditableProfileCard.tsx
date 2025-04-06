import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { ProfileCard } from 'entities/Profile'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { profileActions } from '../../model/slices/profileSlice'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileFormData, getProfileIsLoading, getProfileReadonly } from '../../model/selectors/profileSelectors'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Loader } from 'shared/ui/Loader/loader/Loader'
import { PageLoader } from 'shared/ui/Loader/PageLoader/PageLoader'

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileFormData)
    const readonly = useSelector(getProfileReadonly)
    const isLoading = useSelector(getProfileIsLoading)

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

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />
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
                />}
        </div>
    )
}