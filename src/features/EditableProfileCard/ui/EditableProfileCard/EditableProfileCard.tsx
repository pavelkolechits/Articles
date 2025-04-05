import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { ProfileCard } from 'entities/Profile'

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <ProfileCard />
        </div>
    )
}