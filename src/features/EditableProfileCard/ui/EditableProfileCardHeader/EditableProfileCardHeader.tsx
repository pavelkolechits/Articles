import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps ) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames( cls.EditableProfileCardHeader , {}, [className])}>
           
        </div>
    )
}