import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers/classNames/classNames'


interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            {t('not found')}
        </div>
    )
}

export default NotFoundPage