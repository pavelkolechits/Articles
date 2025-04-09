import { classNames } from 'shared/helpers/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/loader/Loader';
import { RegistrationFormAsync } from '../RegirtrationForm/RegistrationForm.async';

interface LoginModalProps {
    className?: string
    isOpen: boolean;
    onClose: () => void;
    withoutPortal?: boolean;
}

export const RegistrationModal = (props: LoginModalProps) => {

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
                <RegistrationFormAsync />
            </Suspense>
        </Modal>
    )
}
