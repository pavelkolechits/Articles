import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback, useState } from 'react'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import {
    getLoginEmail,
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
} from '../../model/selectors/loginSelectors'
import { loginByEmail } from '../../model/services/loginByEmail'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text/Text'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { validateEmail } from 'shared/helpers/validators/emailValidator/emailValidator'


interface LoginFormProps {
    className?: string
}
const dynamicReducersProps: UseDynamicReducersProps = { reducers: { login: loginReducer } }

const LoginForm = memo((props: LoginFormProps) => {

    const { className } = props
    const { t } = useTranslation('login')
    const dispatch = useAppDispatch()
    const email = useSelector(getLoginEmail)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    useDynamicReducers(dynamicReducersProps)

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(() => {
        dispatch(loginByEmail({ email, password }))
    }, [email, dispatch, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text align='center' title={t('login form')} />
            {error && <Text theme='error' text={error} />}
            <div className={cls.inputWrap}>
                <Input
                    textAlign='start'
                    value={email}
                    onChange={onChangeEmail}
                    max
                    text={t('email')}
                    type="text" />
                <Input
                    textAlign='start'
                    value={password}
                    onChange={onChangePassword}
                    max
                    text={t('password')}
                    type="password" />
            </div>
            <div className={cls.buttonWrap}>
                <Button disabled={isLoading} onClick={onLogin} theme='outline'>{t('login')}</Button>
            </div>
        </div>
    )
})

export default LoginForm