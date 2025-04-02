import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector, useStore } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername
} from '../../model/selectors/loginSelectors'
import { loginByUsername } from '../../model/services/loginByUsename'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema'


interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const store = useStore() as ReduxStoreWithManager
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)
    
    useEffect(() => {
        store.reducerManager.add('login', loginReducer)
    },[])

    
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
            <Text align='center' title={t('Login form')} />
            {error && <Text theme='error' text={error} />}
            <div className={cls.inputWrap}>
                <Input value={username} onChange={onChangeUsername} max text='username' type="text" />
                <Input value={password} onChange={onChangePassword} max text='password' type="password" />
            </div>
            <div className={cls.buttonWrap}>
                <Button disabled={isLoading} onClick={onLogin} theme='outline'>{t('login')}</Button>
            </div>
        </div>
    )
})

export default LoginForm