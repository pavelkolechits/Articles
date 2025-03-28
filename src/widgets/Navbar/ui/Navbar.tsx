import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsOpenModal(prev => !prev)
    },[])


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme='inverted-background' onClick={onToggleModal}>{t('Login')}</Button>
            </div>
            <Modal isOpen={isOpenModal} onClose={onToggleModal}>
             
            </Modal>
        </div>
    )
}


