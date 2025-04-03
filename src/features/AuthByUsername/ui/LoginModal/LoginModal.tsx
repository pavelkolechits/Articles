import { classNames } from 'shared/helpers/classNames/classNames'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Modal } from 'shared/ui/Modal/Modal'
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/loader/Loader';

interface LoginModalProps {
    className?: string
    isOpen: boolean;
    onClose: () => void;
    withoutPortal?: boolean;
}

export const LoginModal = (props: LoginModalProps) => {

    const { className, isOpen, onClose, withoutPortal } = props

    return (
        <Modal
            lazy
            withoutPortal={withoutPortal}
            onClose={onClose}
            isOpen={isOpen}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}

