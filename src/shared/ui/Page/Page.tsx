import { classNames } from 'shared/helpers/classNames/classNames'

import cls from './Page.module.scss'
import { createRef, MutableRefObject, ReactNode, RefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/hoocs/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {

    const { className, children, onScrollEnd } = props

    const triggerRef = useRef<HTMLDivElement | null>(null) as RefObject<HTMLDivElement>
    const wrapperRef = useRef<HTMLDivElement | null>(null) as RefObject<HTMLDivElement>



    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd  
    })


    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </section>
    )
}