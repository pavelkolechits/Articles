import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { memo } from 'react'
import { profileReducer } from 'entities/Profile'

interface ProfilePageProps {
    className?: string
}
const dynamicReducersProps: UseDynamicReducersProps = { reducers: { profile: profileReducer } }

const ProfilePage = (props: ProfilePageProps) => {

    const { className } = props
    const { t } = useTranslation()
    useDynamicReducers(dynamicReducersProps)

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {t('Profile')}
        </div>
    )
}

export default memo(ProfilePage)