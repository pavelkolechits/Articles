import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slices/loginSlice'
import {
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername
} from '../../model/selectors/loginSelectors'
import { loginByUsername } from '../../model/services/loginByUsename'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {

    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.intups}>
                <Input value={username} onChange={onChangeUsername} max text='username' type="text" />
                <Input value={password} onChange={onChangePassword} max text='password' type="password" />
            </div>
            <div className={cls.buttons}>
                <Button disabled={isLoading} onClick={onLogin} theme='outline'>{t('login')}</Button>
            </div>
        </div>
    )
})