import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from '../loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {

    const { className } = props

    return (
        <div data-testid='page-loader' className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}