import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps ) => {

    const { className } = props

    return (
        <div data-testid='loader' className={classNames(cls.Loader, {} ,[className])}></div>
    )
}