import { classNames } from 'shared/helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './RegistrationForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text/Text'
import { useDynamicReducers, UseDynamicReducersProps } from 'shared/hoocs/useDynamicReducers/useDynamicReducers'
import { registrationActions, registrationReducer } from '../../model/slices/registrationSlice'
import { registration } from 'features/Registration/model/services/registration'
import {
    getRegistrationEmail,
    getRegistrationError,
    getRegistrationIsLoading,
    getRegistrationPassword
} from '../../model/selectors/registrationSelectors'


interface RegistrationFormProps {
    className?: string
}
const dynamicReducersProps: UseDynamicReducersProps = { reducers: { registration: registrationReducer } }

const RegistrationForm = memo((props: RegistrationFormProps) => {

    const { className } = props
    const { t } = useTranslation('registation')
    const dispatch = useAppDispatch()
    const email = useSelector(getRegistrationEmail)
    const password = useSelector(getRegistrationPassword)
    const isLoading = useSelector(getRegistrationIsLoading)
    const error = useSelector(getRegistrationError)


    useDynamicReducers(dynamicReducersProps)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(registrationActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(registrationActions.setPassword(value))
    }, [dispatch])

    const onRegistration = useCallback(() => {
        dispatch(registration({ email, password }))
    }, [dispatch, password, email])

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <Text align='center' title={t('registration form')} />
            {error && <Text theme='error' text={error}/>}
            <div className={cls.inputWrap}>
                <Input
                    textAlign='start'
                    value={email}
                    onChange={onChangeUsername}
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
                <Button disabled={isLoading} onClick={onRegistration} theme='outline'>{t('registration')}</Button>
            </div>
        </div>
    )
})

export default RegistrationForm