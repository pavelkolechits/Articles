import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'
import { CurrencySelect } from 'entities/Currency'
import { CountrySelect } from 'entities/Country'


interface ProfileCardProps {
    className?: string
    
}



export const ProfileCard = (props: ProfileCardProps) => {

    const { className } = props
    const { t } = useTranslation('profile')

    


    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profileData}>
                <Input text={t('firstname')} value={''} />
                <Input text={t('lastname')} value={''} />
                <Input type='email' text={t('email')} value={''} />
                <Input text={t('age')} value={''} />
                <Input text={t('sity')} value={''} />
                <Input type='file' text={t('avatar')} value={''} />
                <CurrencySelect/>
                <CountrySelect/>
            </div>


        </div>
    )
}