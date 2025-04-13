import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { memo, useEffect } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard'
import { useLocation, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageProps {
    className?: string
}
const dynamicReducersProps: UseDynamicReducersProps = {
    reducers: { profile: profileReducer },
    removeAfterAnmount: false
}

const ProfilePage = (props: ProfilePageProps) => {
    useDynamicReducers(dynamicReducersProps)
    const { className } = props
    const { t } = useTranslation('profile')
    const {id} = useParams<{id: string}>()

    if(!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <EditableProfileCard id={id}/>
        </div>
    )
}

export default memo(ProfilePage)