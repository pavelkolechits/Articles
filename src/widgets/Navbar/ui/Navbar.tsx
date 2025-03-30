import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false)
    },[])

    const onOpenModal = useCallback(() => {
        setIsOpenModal(true)
    },[])


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme='inverted-background' onClick={onOpenModal}>{t('Login')}</Button>
            </div>
            <LoginModal isOpen={isOpenModal} onClose={onCloseModal}/>
        </div>
    )
}


