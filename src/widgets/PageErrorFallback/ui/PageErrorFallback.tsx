import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './PageErrorFallback.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorFallbackProps {
    className?: string
}

export const PageErrorFallback = (props: PageErrorFallbackProps) => {

    const { className } = props
    const { t } = useTranslation()
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageErrorFallback, {}, [className])}>
            <div className={cls.content}>
                <h1>{t('Something went wrong!')}</h1>
                <Button theme='outline' onClick={reloadPage}>{t('Reload page')}</Button>
            </div>

        </div>
    )
}