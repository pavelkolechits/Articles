import { classNames } from 'shared/helpers/classNames/classNames'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    withoutPortal?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const { className, children, onClose, isOpen, withoutPortal = false } = props

    const [isClosing, setIsClosing] = useState(true)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)

    const onCloseHandler = useCallback(() => {
        setIsClosing(true)
        timerRef.current = setTimeout(() => onClose?.(), ANIMATION_DELAY)
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false)
            document.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (withoutPortal) {
        return (
            <div
                data-testid='modal-without-portal'
                onClick={onCloseHandler}
                className={
                    classNames(cls.Modal, { [cls.opened]: isOpen, }, [className])}>
                <div className={cls.overlay}>
                    <div onClick={onContentClick}
                        className={
                            classNames(
                                cls.content,
                                {
                                    [cls.closing]: isClosing,
                                }, [])
                        }>
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Portal>
            <div
                data-testid='modal'
                onClick={onCloseHandler}
                className={
                    classNames(cls.Modal, { [cls.opened]: isOpen, }, [className])}>
                <div className={cls.overlay}>
                    <div data-testid='content' onClick={onContentClick}
                        className={
                            classNames(
                                cls.content,
                                {
                                    [cls.closing]: isClosing,
                                }, [])
                        }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}