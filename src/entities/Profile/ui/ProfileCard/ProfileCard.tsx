import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import { Profile } from '../../model/types/profile'


interface ProfileCardProps {
    className?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeCurency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    readonly?: boolean;
    profileData?: Profile;

}



export const ProfileCard = (props: ProfileCardProps) => {

    const {
        className,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurency,
        readonly,
        profileData
    } = props
    const { t } = useTranslation('profile')


    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profileData}>
                <Input
                    readonly={readonly}
                    disabled={readonly}
                    onChange={onChangeFirstname}
                    text={t('firstname')}
                    value={profileData?.firstname} />
                <Input
                    readonly={readonly}
                    onChange={onChangeLastname}
                    text={t('lastname')}
                    value={profileData?.lastname} />
                <Input
                    readonly={readonly}
                    type='email'
                    text={t('email')}
                    value={profileData?.email} />
                <Input
                    readonly={readonly}
                    onChange={onChangeAge}
                    type='number' text={t('age')}
                    value={profileData?.age} />
                <Input
                    readonly={readonly}
                    onChange={onChangeCity}
                    text={t('city')}
                    value={profileData?.city} />
                <Input
                    disabled={readonly}
                    readonly={readonly}
                    type='file'
                    text={t('avatar')}
                    value={''} />
                <CurrencySelect
                    readonly={readonly}
                    value={profileData?.currency}
                    onChange={onChangeCurency} />
                <CountrySelect
                    readonly={readonly}
                    value={profileData?.country}
                    onChange={onChangeCountry} />
            </div>
        </div>
    )
}