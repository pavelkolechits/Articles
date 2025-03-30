import { classNames } from 'shared/helpers/classNames/classNames'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
    className?: string
    isOpen: boolean;
    onClose: () => void;
    withoutPortal?: boolean
}

export const LoginModal = (props: LoginModalProps) => {

    const { className, isOpen, onClose, withoutPortal } = props

    return (
        <Modal 
            withoutPortal={withoutPortal}
            onClose={onClose}
            isOpen={isOpen}
            className={classNames('', {}, [className])}
        >
            <LoginForm />
        </Modal>
    )
}

