import { classNames } from 'shared/helpers/classNames/classNames'

import cls from './Page.module.scss'
import { UIEvent, ReactNode, RefObject, useRef, useEffect } from 'react';
import { useInfiniteScroll } from 'shared/hoocs/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/hoocs/useAppDispatch/useAppDispatch';
import { scrollPositionActions } from 'features/ScrollPosition/model/slices/scrollPositionSlice';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollPosition, getScrollPositionByPath } from 'features/ScrollPosition/model/selectors/scrollPositionSelectors';
import { useThrottle } from 'shared/hoocs/useThrottle/useThrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {


    const { className, children, onScrollEnd } = props

    const triggerRef = useRef<HTMLDivElement | null>(null) as RefObject<HTMLDivElement>
    const wrapperRef = useRef<HTMLDivElement | null>(null) as RefObject<HTMLDivElement>

    const { pathname } = location
    const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname))


    const dispatch = useAppDispatch()

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    }, [])


    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    })

    const onScroll = useThrottle(
        (e: UIEvent<HTMLDivElement>) => {
            dispatch(scrollPositionActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
        }, 500
    )


    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}>
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </section>
    )
}