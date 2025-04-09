import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { getUserAuthData, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'
import { LoginModal } from 'features/AuthByEmail'
import { RegistrationModal } from 'features/Registration'

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
    const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onCloseLoginModal = useCallback(() => {
        setIsOpenLoginModal(false)
    }, [])

    const onOpenLoginModal = useCallback(() => {
        setIsOpenLoginModal(true)
    }, [])


    const onCloseRegistrationModal = useCallback(() => {
        setIsOpenRegistrationModal(false)
    }, [])

    const onOpenRegistrationModal = useCallback(() => {
        setIsOpenRegistrationModal(true)
    }, [])

    const onLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button onClick={onLogout} theme='inverted-background' >{t('Logout')}</Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme='inverted-background' onClick={onOpenRegistrationModal}>{t('Registration')}</Button>
                <Button theme='inverted-background' onClick={onOpenLoginModal}>{t('Login')}</Button>
            </div>
            <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
            <RegistrationModal isOpen={isOpenRegistrationModal} onClose={onCloseRegistrationModal} />
        </div>
    )
})


