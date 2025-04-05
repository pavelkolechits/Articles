import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { memo, useEffect } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard'

interface ProfilePageProps {
    className?: string
}
const dynamicReducersProps: UseDynamicReducersProps = { reducers: { profile: profileReducer } }

const ProfilePage = (props: ProfilePageProps) => {

    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    useDynamicReducers(dynamicReducersProps)

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <EditableProfileCard />
        </div>
    )
}

export default memo(ProfilePage)