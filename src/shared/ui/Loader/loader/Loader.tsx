import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {

    const { className } = props

    return (
        <div className={cls.wrap}>
            <div data-testid='loader' className={classNames(cls.Loader, {}, [className])}></div>
        </div>

    )
}