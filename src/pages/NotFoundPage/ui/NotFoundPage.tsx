import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers/classNames/classNames'
import { Page } from 'widgets/Page/Page'


interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {

    const { className } = props
    const { t } = useTranslation('not_found')

    return (
        <Page className={classNames('', {}, [className])}>
            {t('not found')}
        </Page>
    )
}

export default NotFoundPage