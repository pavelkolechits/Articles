import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'


interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {

    const { className } = props
    const { t, i18n } = useTranslation()

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={onToggleLanguage}
            className={classNames('', {}, [className])}>
            {t('language')}
        </Button>
    )
}