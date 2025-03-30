import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.intups}>
                <Input max text='username' type="text" />
                <Input max text='password' type="text" />
            </div>
            <div className={cls.buttons}>
                <Button theme='outline'>{t('login')}</Button>
            </div>
        </div>
    )
}