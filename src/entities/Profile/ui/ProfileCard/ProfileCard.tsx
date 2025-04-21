/* eslint-disable max-len */
import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import { Profile } from '../../model/types/profile'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ImageUploader } from 'shared/ui/ImageUploader/ImageUploader'
import AvatarAlt from 'shared/assets/icons/ava.svg'


interface ProfileCardProps {
    className?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeCurency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    onChangeAvatar?: (file: FormData) => void
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
        onChangeAvatar,
        readonly,
        profileData
    } = props
    const { t } = useTranslation('profile')


    return (
        <div className={classNames(cls.ProfileCard, { [cls.readonly]: readonly }, [className])}>
            <div className={cls.avatar}>
                <Avatar  src={profileData?.avatar}/>
                {!readonly && <ImageUploader onLoadFile={onChangeAvatar}/>}
            </div>
            <div className={cls.profileData}>
                <Input
                    readonly={readonly}
                    disabled={readonly}
                    onChange={onChangeFirstname}
                    text={t('firstname')}
                    textAlign='start'
                    value={profileData?.firstname || ''} />
                <Input
                    readonly={readonly}
                    onChange={onChangeLastname}
                    text={t('lastname')}
                    textAlign='start'
                    value={profileData?.lastname || ''} />
                <Input
                    readonly={readonly}
                    type='email'
                    text={t('email')}
                    textAlign='start'
                    value={profileData?.email || ''} />
                <Input
                    readonly={readonly}
                    onChange={onChangeAge}
                    type='number' text={t('age')}
                    textAlign='start'
                    value={profileData?.age || ''} />
                <Input
                    readonly={readonly}
                    onChange={onChangeCity}
                    text={t('city')}
                    textAlign='start'
                    value={profileData?.city || ''} />
                <CurrencySelect
                    readonly={readonly}
                    value={profileData?.currency }
                    textAlign='start'
                    onChange={onChangeCurency} />
                <CountrySelect
                    readonly={readonly}
                    textAlign='start'
                    value={profileData?.country}
                    onChange={onChangeCountry} />
            </div>
        </div>
    )
}