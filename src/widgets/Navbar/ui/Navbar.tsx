import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage'
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch'

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true)
    }, [])
    const onLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
        dispatch(userActions.logout())
    },[dispatch])

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
                <Button theme='inverted-background' onClick={onOpenModal}>{t('Login')}</Button>
            </div>
            <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
        </div>
    )
})


